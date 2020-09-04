'use strict'

const MongoClient = require("mongodb").MongoClient;

// database name
const dbName = 'rssfeeddb';

/*
 * Connect to mongo client
 * @return Object client
 */
const connectToMongoDb = async function() {

    // connection URL, modify environment variables in docker-compose.yml
    const url = 'mongodb://' + process.env.MONGO_URL + ':' + process.env.MONGO_PORT;

    try {

        if (url && dbName) {

            const client = await MongoClient.connect(url, {useUnifiedTopology: true});
            //const db = client.db(dbName);

            console.log('Connected to mongoDB');
            return client;

        } else {
            console.log('Missing or wrong parameters to connect to Mongo database');
            throw new Error('Missing or wrong parameters to connect to Mongo database', url);
        }

    } catch(error) {
        throw error;
    }

};

module.exports = {
    'connectToMongoDb': connectToMongoDb,
    'dbName': dbName
}