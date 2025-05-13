# TypeScript Data Layer

This project implements a data layer for managing database operations in TypeScript. It provides routines for connecting to a database, closing the connection, and performing CRUD (Create, Read, Update, Delete) operations on records.

## Project Structure

```
typescript-data-layer
├── src
│   ├── db
│   │   ├── connection.ts    # Establishes a connection to the database
│   │   ├── close.ts         # Closes the database connection
│   │   ├── insert.ts        # Inserts a record into the database
│   │   ├── update.ts        # Updates a record in the database
│   │   ├── delete.ts        # Deletes a record from the database
│   │   └── types.ts         # Defines types for records and connections
│   └── index.ts             # Entry point for the application
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

1. **Create a Connection**: Use the `createConnection` function from `connection.ts` to establish a connection to the database.
2. **Insert a Record**: Use the `insertRecord` function from `insert.ts` to add a new record to the database.
3. **Update a Record**: Use the `updateRecord` function from `update.ts` to modify an existing record.
4. **Delete a Record**: Use the `deleteRecord` function from `delete.ts` to remove a record from the database.
5. **Close the Connection**: Use the `closeConnection` function from `close.ts` to safely close the database connection when done.

## Example

Refer to `src/index.ts` for an example of how to use the functions provided in this project.

## License

This project is licensed under the MIT License.