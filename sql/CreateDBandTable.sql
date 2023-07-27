CREATE DATABASE japa;

CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    facilitator INT,
    FOREIGN KEY (facilitator) REFERENCES Users(id)
);

CREATE TABLE Meetings (
    id INT PRIMARY KEY,
    date DATE,
    name VARCHAR(50),
    by INT,
    Foreign Key (by) REFERENCES users(id)
);

CREATE TABLE Attendance (
    id INT PRIMARY KEY,
    user INT,
    meeting INT,
    FOREIGN KEY (user) REFERENCES Users(id),
    FOREIGN KEY (meeting) REFERENCES Meetings(id)
);