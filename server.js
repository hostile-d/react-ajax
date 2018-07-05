var express = require('express');
var app = express();

var sampleCards = require('./sample-cards.json');
var sampleFilters = require('./sample-filters.json');

app.get('/api/sample-cards', function(req, res) {
    res.status(200).send(sampleCards);
});
app.get('/api/sample-filters', function(req, res) {
    console.log(sampleFilters);
    res.status(200).send(sampleFilters);
});

var server = app.listen(3000, function() {
    console.log('app running on port.', server.address().port);
});
