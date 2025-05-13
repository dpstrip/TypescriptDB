import Loki from 'lokijs';

export function listRecords(db: Loki, collectionName: string): any[] {
    try {
        const collection = db.getCollection(collectionName);
        if (!collection) {
            console.error(`Collection "${collectionName}" does not exist.`);
            return [];
        }

        const records = collection.find();
        console.log(`Records in collection "${collectionName}":`, records);
        return records;
    } catch (error) {
        console.error('Error listing records:', error);
        return [];
    }
}