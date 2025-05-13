import {
    connectToDatabase,
    closeDatabase,
    createRecord,
    getAllRecords,
} from './db/databaseLayer';

function main() {
    // Open the database connection
    const db = connectToDatabase();

    // Add a new record
    // createRecord(db, 'David', 29);

    // List all records
    getAllRecords(db);

    // Close the database connection
    closeDatabase(db);
}

main();