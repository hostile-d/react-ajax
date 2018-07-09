var express = require('express');
var path = require('path');
var sampleCards = require('./data/sample-cards.json');
var sampleFilters = require('./data/sample-filters.json');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/api/sample-cards', function(req, res) {
    sendFilteredData(req, res);
});
app.get('/api/sample-filters', function(req, res) {
    res.status(200).send(sampleFilters);
});
function sendFilteredData(req, res) {
    const params = req.query;
    let filteredCards = sampleCards;

    if (params) {
        filteredCards = sampleCards.filter(card => {
            let fulfil = true;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    if (card[key] !== params[key]) {
                        fulfil = false;
                    }
                }
            }
            return fulfil;
        });
    }

    res.status(200).send(filteredCards);
}
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port.', server.address().port);
});
