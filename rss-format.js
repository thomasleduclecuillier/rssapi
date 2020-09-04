'use strict'

const Feed = require('feed').Feed;

/*
 * Build final rss feed from the data extracted from the database
 * @param Object data
 * @return String
 */
module.exports = function(data) {

    //console.log(typeof data);
    //console.log(Object.keys(data).length);

    // final rss feed initialisation
    const finalFeed = new Feed({
        title:          'Sports feed',
        description:    'RSS feed to practice',
        link:           'http://example.com/',
        image:          'http://example.com/logo.png',
        copyright:      'Copyright © 2020 Thomas Leduc Le Cuillier. All rights reserved',

        author: {
            name:       'Thomas Leduc Le Cuillier',
        }
    });

    // final rss feed building 
    data.forEach(feed => {
            // parse data back from JSON to Javascript object to construct the new rss feed
            const post = JSON.parse(feed.item);
            finalFeed.addItem({
                title: post.title,
                id: post.url,
                link: post.url,
                description: post.description,
                content: post.content,
                author: post.author,
                contributor: post.contributor,
                date: post.date,
                image: post.image
            });
    });

    console.log('Building final rss feed completed')
    return finalFeed.rss2();
}