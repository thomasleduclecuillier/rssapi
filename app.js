'use strict'

const express = require('express');
//const util = require('util');
const RSSFeed = require('./rss-feed');
const updateRSSFeed = require('./rss-updater').updateRSSFeed;

const delay = 2 * 60 * 60 * 1000; // 2 hour in msec

/*
 * Start the server
 */
const app = express();

/*const update = updateRSSFeed()
    .then(res => {
        setTimeout(updateRSSFeed, delay);
    })
    .catch(function (error) {
        console.error(error);
        setTimeout(updateRSSFeed, delay);
    });*/

// Auto-invoked function to update the database with providers rss feed every two hours
(function update() {
    console.log('Update RSS feeds');
    updateRSSFeed()
        .then(res => {
            setTimeout(updateRSSFeed, delay);
        })
        .catch(function (error) {
            console.error(error);
            setTimeout(updateRSSFeed, delay);
        });
}());

/*
 * Endpoint of the API
 * REST API
 */
app.get('/getRSSFeed', function(req, res, next) {

    RSSFeed.getRSSFeed()
        .then(data => {
            res.result = data;
            //console.log('RSS feed retrieved', util.inspect(data, false, null, true /* enable colors */));
            res.set('Content-Type', 'text/xml');
            res.send(data);
        })
        .catch(function (error) {
            console.error(error);
            res.render('error', error);
        });
});

module.exports = {
    app
};