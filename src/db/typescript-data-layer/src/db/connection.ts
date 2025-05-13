import Loki from 'lokijs';

export const createConnection = (): Loki => {
  const db = new Loki('example.db', {
    autoload: true, // Automatically load the database on startup
    autosave: true, // Automatically save the database
    autosaveInterval: 4000, // Save every 4 seconds
  });

  return db;
};