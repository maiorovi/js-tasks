const {MongoClient, ObjectID} = require('mongodb');
let a = {a: 'user', b: 'security'};

console.log('User description', a);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    // deleteMany
    // deleteOne
    // findOneAndDelete
    db.collection('Todos').delete()
    // client.close();
});