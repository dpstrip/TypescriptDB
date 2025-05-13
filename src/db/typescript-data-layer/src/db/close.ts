export function closeConnection(connection: any): void {
    if (connection) {
        connection.close();
        console.log('Database connection closed successfully.');
    } else {
        console.error('No connection to close.');
    }
}