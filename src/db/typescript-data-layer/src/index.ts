import { createConnection } from './db/connection';
import { closeConnection } from './db/close';
import { insertRecord } from './db/insert';
import { updateRecord } from './db/update';
import { deleteRecord } from './db/delete';
import { Record, Connection } from './db/types';

async function main() {
    const connection: Connection = createConnection();

    const newRecord: Record = { id: '1', name: 'Sample Record', value: 'This is a sample.' };
    const insertResult = await insertRecord(connection, newRecord);
    console.log('Insert Result:', insertResult);

    const updatedData: Partial<Record> = { value: 'This is an updated sample.' };
    const updateResult = await updateRecord(connection, '1', updatedData);
    console.log('Update Result:', updateResult);

    const deleteResult = await deleteRecord(connection, '1');
    console.log('Delete Result:', deleteResult);

    closeConnection(connection);
}

main().catch(err => console.error('Error in main:', err));