'use strict'

const { readMongoDb } = require('./mongo');
const RSSBuilder = require('./rss-format');

/*
 * Get the data from the database and return the final outcome
 * @return String
 */
const getRSSFeed = async function() {

    try {
        const data = await readMongoDb('sports');
        return RSSBuilder(data);
    } catch (error) {
        throw error;
    }
    
};

module.exports = {
    'getRSSFeed' : getRSSFeed
};