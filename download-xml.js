'use strict'

const request = require('request');

/*
 * HTTP request to the RSS feed provider
 * @param String url
 * @return Promise
 */
const downloadXML = function(url) {

    return new Promise( function(resolve, reject) {

        const start = Date.now();
        return request(url, function (error, response, body) {

            const responseTime = (Date.now() - start) / 1000;
            console.log('Feed response time', responseTime);
            if (error) {
                console.error('Request provider\'s feed error : ', error);
                return reject(error);
            }

            if (response) {
                if (response.statusCode !== 200) {

                    if (response.statusCode === 404) {
                        console.log('Resource not found');
                        return reject(new Error(response.statusCode, 'Resource not found'));
                    }

                    console.log('HTTP error', body);
                    return reject(new Error(response.statusCode, 'HTTP error'));
                }
            }

            if (!body) {
                console.log('HTTP response has no data');
                return reject(new Error(404, 'HTTP response has no data'));
            }

            console.log('Download successful'/*, body*/);
            return resolve(body);
        })
    })
}

module.exports = {
    'downloadXML' : downloadXML
};