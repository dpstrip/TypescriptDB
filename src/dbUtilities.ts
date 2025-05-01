import Loki from 'lokijs';

// Create a LokiJS database with persistence
const db = new Loki('example.db', {
  autoload: true, // Automatically load the database on startup
  autoloadCallback: databaseInitialize, // Callback after loading
  autosave: true, // Automatically save the database
  autosaveInterval: 4000, // Save every 4 seconds
});

// Initialize the database
function databaseInitialize() {
  let users = db.getCollection('users');
  if (!users) {
    users = db.addCollection('users');
  }

  // Example: Insert data
//   users.insert({ name: 'David Doe', age: 62 });
//   users.insert([{ name: 'Thor', age: 35 }, { name: 'Loki', age: 30 }]);

  // Query data
  console.log('Database initialized and data inserted.  Query for just users older than 35:');
  const results = users.find({ age: { $gte: 35 } });
  console.log('Results:', results);


// Query all documents
console.log('Querying all documents in the users collection:');
const allDocuments = users.find();
console.log('All Documents:', allDocuments);


const userCount = users.count();
console.log('Number of documents in the users collection:', userCount);

  // Save the database explicitly (optional, autosave will handle it)
 // Save the database explicitly and exit
 db.saveDatabase((err) => {
    if (err) {
      console.error('Error saving database:', err);
    } else {
      console.log('Database saved successfully.');
    }
    process.exit(); // Exit the program
  });
}

// Handle errors during database loading
db.on('error', (err) => {
  console.error('Error loading database:', err);
});