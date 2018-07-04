var express = require('express');
var app = express();
var sampleCards = require('./sample-cards.json');

app.get('/api/sample-cards', function(req, res) {
    res.status(200).send(sampleCards);
});

var server = app.listen(3000, function() {
    console.log('app running on port.', server.address().port);
});
