const fs = require("fs");
const str = fs.readFileSync("AllData.json", "utf8");
const allData = JSON.parse(str);

allData.forEach((data) => {
  function generateUsersInsertSQL(user) {
    return `INSERT INTO users (id, name, email) VALUES ('${user?.id}','${user?.japaParticipants?.name}', '${user?.japaParticipants?.email}');`;
  }
  function generateMeetingsInsertSQL(meeting) {
    return `INSERT INTO meetings (id, date, meeting_name) VALUES ('${meeting?.date
      ?.replaceAll("-", "")
      .slice(3)}','${meeting?.date}', 'Japa');`;
  }
  function generateAttendanceInsertSQL(data) {
    return `INSERT INTO attendance (user, meeting, duration, status, inoutTime) VALUES (${
      data?.id
    }, ${data?.date?.replaceAll("-", "")?.slice(3)}, ${data?.totalMinutes}, '${
      data?.status
    }', '${data?.joinLeaveTime}');`;
  }
  const usersInsertSQL = [];
  const meetingsInsertSQL = [];
  const attendanceInsertSQL = [];
  data.forEach((item, i) => {
    usersInsertSQL.push(generateUsersInsertSQL(item));
    i == 0 ? meetingsInsertSQL.push(generateMeetingsInsertSQL(item)) : "";
    attendanceInsertSQL.push(generateAttendanceInsertSQL(item));
  });
  fs.appendFileSync("AllData.sql", usersInsertSQL.join("\n"), "utf8");
  fs.appendFileSync("AllData.sql", meetingsInsertSQL.join("\n"), "utf8");
  fs.appendFileSync("AllData.sql", attendanceInsertSQL.join("\n"), "utf8");
});