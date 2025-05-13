import { createConnection } from './connection';

export function insertRecord(collectionName: string, record: any): boolean {
    try {
        const db = createConnection();
        const collection = db.getCollection(collectionName);

        if (!collection) {
            console.error(`Collection "${collectionName}" does not exist.`);
            return false;
        }

        collection.insert(record);
        console.log(`Record inserted successfully into "${collectionName}":`, record);

        db.saveDatabase((err) => {
            if (err) {
                console.error('Error saving database:', err);
            } else {
                console.log('Database saved successfully.');
            }
        });

        return true;
    } catch (error) {
        console.error('Error inserting record:', error);
        return false;
    }
}