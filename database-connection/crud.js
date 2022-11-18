//import clientPromise from './mongodb.js';
const clientPromise = require('./mongodb')
const client = await clientPromise;
const db = client.db('ProfileBuilder')
const collection = db.collection('users');

async function insertDocument(userObject) {
  await collection.insertOne(userObject)
}

export {insertDocument}
