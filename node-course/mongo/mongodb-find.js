const {MongoClient, ObjectID} = require('mongodb');
let a = {a: 'user', b: 'security'};

console.log('User description', a);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

   db.collection('Todos').find({_id : new ObjectID('5b1d36c317389e0a207b4789')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
    console.log('Unable to fetch todos', err);
   });

    // client.close();
});