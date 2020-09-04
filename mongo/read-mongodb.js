'use strict'

const connectDatabase = require('./mongodb').connectToMongoDb;
const dbName = require('./mongodb').dbName;

/*
 * Retrieve all data from mongoDB
 * @param String collectionName
 * @return Object read
 */
module.exports = async function(collectionName) {

    try {

        const client = await connectDatabase();
        const db = client.db(dbName);
        const read = await db.collection(collectionName).find().toArray();

        console.log("Document(s) retrieved");
        client.close();
        return read;

    } catch(error) {
        console.error('Error when reading data from database', error);
        throw error;
    }

}