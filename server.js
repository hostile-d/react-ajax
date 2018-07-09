var express = require('../../../Library/Caches/typescript/2.9/node_modules/@types/express');
var app = express();

var sampleCards = require('./data/sample-cards.json');
var sampleFilters = require('./data/sample-filters.json');

app.get('/api/sample-cards', function(req, res) {
    sendData(req, res, sampleCards);
});
app.get('/api/sample-filters', function(req, res) {
    sendData(req, res, sampleFilters);
});
function sendData(req, res, data) {
    console.log(req.params);
    res.status(200).send(data);
}
var server = app.listen(3000, function() {
    console.log('app running on port.', server.address().port);
});
