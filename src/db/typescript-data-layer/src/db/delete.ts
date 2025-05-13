import Loki from 'lokijs';

export function deleteRecord(db: Loki, collectionName: string, recordId: string): boolean {
    try {
        const collection = db.getCollection(collectionName);
        if (!collection) {
            console.error(`Collection "${collectionName}" does not exist.`);
            return false;
        }

        const record = collection.findOne({ $loki: parseInt(recordId, 10) });
        if (!record) {
            console.error(`Record with ID "${recordId}" not found.`);
            return false;
        }

        collection.remove(record);
        console.log(`Record with ID "${recordId}" deleted successfully.`);
        return true;
    } catch (error) {
        console.error('Error deleting record:', error);
        return false;
    }
}