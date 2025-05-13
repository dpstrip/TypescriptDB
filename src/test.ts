import sqlite3 from 'sqlite3';
import { getRecordById } from './db/getRecordById';

let data = "string of things"

console.log(data);

//Create a new database file
const db = new sqlite3.Database('myDatabase.db');

//create a table
db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)`);

db.run(`INSERT INTO users (name, age) VALUES (?, ?)`, ['Penny Doe', 30], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
}
);

db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

// Retrieve the record with ID 3
getRecordById(dbPath, 3)
    .then((record) => {
        if (record) {
            console.log('Record with ID 3:', record);
        } else {
            console.log('No record found with ID 3.');
        }
    })
    .catch((error) => {
        console.error('Error retrieving record:', error);
    });

db.close