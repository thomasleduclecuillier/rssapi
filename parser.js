'use strict'

const parseString = require('xml2js').parseString;

/*
 * Parse the data from RSS feed to allow handling the XML
 * @param String rawData
 * @return Object parsedData
 */
module.exports = function(rawData) {

    let parsedData;

    console.log('Parsing data');
    parseString(rawData, function (err, result) {
        if(err) {
            console.error('Error when parsing data', err);
            throw new Error(500, 'Error when parsing data');
        }

        parsedData = result;
    });

    //console.log(parsedData);

    return parsedData;
};