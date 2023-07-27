# Project Name

**Project Description:** This project is designed to collect data from an API, process it, and create a scalable database for managing attendance records.

## Project Structure

The structure of this project is as follows:

- `allAPIdata/`: This folder is currently empty. It will hold the individual data files fetched from the API.
- `sql/`: This folder contains the SQL scripts and the final master SQL file.
- `AllData.json`: This file will be generated after running `dataImport.js`. It acts as a master file containing processed data.
- `datafill.js`: This script is used to populate the `AllData.json` file by processing data from the API.
- `dataImport.js`: This script is used to import data from individual API requests and create the `AllData.json` master file.

## Getting Started

1. Make sure the `allAPIdata/` folder is empty.
2. Fetch data for each day from the API by using the endpoint: `https://copyhlzglobalregistration-production.up.railway.app/v1/attendance/japa/fetchAll?date={put your date in yyyy-mm-dd format}`. For each day's data, save it in a file within the `allAPIdata/` folder with any name and extension (the extension doesn't matter).
3. Run `dataImport.js` to process the individual API data files and generate the `AllData.json` master file. This file will be used as the source of truth for all the data.
4. Execute `datafill.js` to create the master SQL file, which contains all the data from `AllData.json`.

## Setting Up the Database

1. Open the `sql/` folder and locate the `CreateDBandTable.sql` script.
2. Run the script in your preferred SQL database management system to create the necessary database and tables for the project.

## Handling Duplicate Data

The fetched data from the API may contain duplicate entries for users with the same name and email. To manage this:

1. After setting up the database, execute `after.sql`. This script will handle duplicate data and ensure that each user is registered only once.

## Building APIs

With the database and tables set up, and duplicate data managed, you are now ready to build APIs using the project data.

## Advantages

One of the key advantages of this project is its scalability. The system is designed to handle a large amount of data efficiently and effectively.

Feel free to explore the project and leverage the provided scripts to make the most of this attendance management system!

**Note:** Remember to replace `{put your date in yyyy-mm-dd format}` with the desired date for fetching data from the API.
