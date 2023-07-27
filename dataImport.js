var fs = require("fs");
var path = require("path");
var process = require("process");
var moveFrom = "./allAPIdata";
fs.readdir(moveFrom, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }
  fs.writeFileSync("AllData.json", "[", "utf8");
  files.forEach(function (file) {
    var fromPath = path.join(moveFrom, file);
    fs.appendFileSync(
      "AllData.json",
      fs.readFileSync(fromPath, "utf8") + ",",
      "utf8"
    );
  });
  fs.appendFileSync("AllData.json", "]", "utf8");
});