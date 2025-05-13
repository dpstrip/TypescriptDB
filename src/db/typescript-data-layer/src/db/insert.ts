import { Connection } from './types';

export async function insertRecord(connection: Connection, record: any): Promise<any> {
    try {
        const result = await connection.collection('yourCollectionName').insertOne(record);
        return result;
    } catch (error) {
        throw new Error(`Error inserting record: ${error.message}`);
    }
}