'use strict'

const downloadXML = require('./download-xml');
const parser = require('./parser');
const {writeMongoDb} = require('./mongo');
const formatData = require('./db-format');
const helper = require('./helper');

/*
 * Send request to the provider and parse the result
 * @param String url
 * @return Object
 */
const getData = async function(url){
    try {
        const rawData = await downloadXML.downloadXML(url);
        return parser(rawData);
    } catch (error) {
        throw error;
    }
}

/*
 * Start async request to the providers, 
 * wait for all results and store the data in a database after formatting
 * @return Object
 */
const updateRSSFeed = async function() {
    try {
        const data = await helper.waitForAll(getData('https://www.lemonde.fr/sport/rss_full.xml'), getData('https://www.eurosport.fr/rss.xml'), getData('https://rmcsport.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/'));
        const dataToStore = await formatData(data);
        return writeMongoDb(dataToStore, 'sports');
    } catch (error) {
        throw error;
    }
};

module.exports = {
    'updateRSSFeed': updateRSSFeed
};