import sqlite3 from 'sqlite3';

const dbPath = './src/db/database.db';

// Function to connect to the database
export function connectToDatabase(): sqlite3.Database {
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Error connecting to the database:', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });

    // Ensure the users table exists
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL
        )`,
        (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Table "users" is ready.');
            }
        }
    );

    return db;
}

// Function to close the database connection
export function closeDatabase(db: sqlite3.Database): void {
    db.close((err) => {
        if (err) {
            console.error('Error closing the database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
    });
}

// Function to create a record
export function createRecord(db: sqlite3.Database, name: string, age: number): void {
    db.run(
        `INSERT INTO users (name, age) VALUES (?, ?)`,
        [name, age],
        function (err) {
            if (err) {
                console.error('Error inserting record:', err.message);
            } else {
                console.log(`Record inserted with ID: ${this.lastID}`);
            }
        }
    );
}

// Function to display all records
export function getAllRecords(db: sqlite3.Database): void {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            console.error('Error fetching records:', err.message);
        } else {
            console.log('All Records:', rows);
        }
    });
}

// Function to update a record
export function updateRecord(db: sqlite3.Database, id: number, name: string, age: number): void {
    db.run(
        `UPDATE users SET name = ?, age = ? WHERE id = ?`,
        [name, age, id],
        function (err) {
            if (err) {
                console.error('Error updating record:', err.message);
            } else if (this.changes === 0) {
                console.log(`No record found with ID: ${id}`);
            } else {
                console.log(`Record with ID: ${id} updated successfully.`);
            }
        }
    );
}

// Function to delete a record
export function deleteRecord(db: sqlite3.Database, id: number): void {
    db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
        if (err) {
            console.error('Error deleting record:', err.message);
        } else if (this.changes === 0) {
            console.log(`No record found with ID: ${id}`);
        } else {
            console.log(`Record with ID: ${id} deleted successfully.`);
        }
    });
}