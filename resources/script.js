var config = {};
Playground.connectToApp(config.app, config.apiKey).then(function(app){
  senseSearch.connectWithQSocks(app);
  var resultOptions = {
     "fields":[
        {
          "dimension": "name",
          "suppressNull": true
        },
        {
          "dimension": "description",
          "suppressNull": false
        },
        {
          "dimension": "private",
          "suppressNull": false
        }
      ],
     "sortOptions": {
       "name": {
          "name": "A-Z",
          "order": 1,
          "field": "name",
          "sortType": "qSortByAscii"
        }
     },
     "defaultSort": "name"
  }
  senseSearch.results["myResults"].attach(resultOptions);
});
