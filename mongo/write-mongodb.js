'use strict'

const connectDatabase = require('./mongodb').connectToMongoDb;
const dbName = require('./mongodb').dbName;

/*
 * Store parsed and aggregated data from RSS feed in mongoDB
 * @param Object data
 * @param String collectionName
 * @return Object write
 */
module.exports = async function(data, collectionName) {

    try {

        const client = await connectDatabase();
        const db = client.db(dbName);
        const write = await db.collection(collectionName).insertMany(data);

        console.log("Document(s) inserted");
        client.close();
        return write;

    } catch(error) {
        console.error('Error writing data to database', error);
        throw error;
    }

}