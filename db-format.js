'use strict'

/*
 * Format the data from RSS feed, casting every item into JSON 
 * to avoid key issues when storing it in mongoDB
 * @param Object data
 * @return Object formattedData
 */
module.exports = function(data) {

    let formattedData = [];

    for (const [ind, value] of Object.entries(data)) {
    
        for (const [key, value] of Object.entries(data[ind].rss.channel[0].item)) {
            formattedData.push({item: JSON.stringify(data[ind].rss.channel[0].item[key])});
        }

    }

    //console.log(typeof formattedData);
    //console.log(Object.keys(formattedData).length);
    return formattedData;
}