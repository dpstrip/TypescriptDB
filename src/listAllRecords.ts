import { createConnection } from './db/typescript-data-layer/src/db/connection';
import { listRecords } from './db/typescript-data-layer/src/db/list';

// Main function to demonstrate listing all records
function main() {
  const db = createConnection();

  db.loadDatabase({}, (err) => {
    if (err) {
      console.error('Error loading database:', err);
      return;
    }

    console.log('Database loaded successfully.');

    // List all records in the "users" collection
    const allRecords = listRecords(db, 'users');
    console.log('All Records:', allRecords);
  });
}

main();