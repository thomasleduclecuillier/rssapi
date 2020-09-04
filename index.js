'use strict'

const app = require('./app').app;

const port = process.env.PORT || 8082;

/*
 * Bind the server to a port
 */
app.listen(port, function (error) {
    if (error) {
        console.error(new Error('Error while starting server : ' + error));
    } else {
        console.log('Server has been started at port ' + port);
    }
});