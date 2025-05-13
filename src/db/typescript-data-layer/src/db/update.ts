import { Connection } from './types';

export async function updateRecord(connection: Connection, recordId: string, updatedData: Partial<Record>): Promise<void> {
    const query = { _id: recordId };
    const update = { $set: updatedData };

    try {
        const result = await connection.collection('yourCollectionName').updateOne(query, update);
        if (result.modifiedCount === 0) {
            throw new Error('No records updated. Please check the record ID.');
        }
    } catch (error) {
        console.error('Error updating record:', error);
        throw error;
    }
}