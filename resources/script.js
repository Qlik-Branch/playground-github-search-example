var config = {};
Playground.authenticate(config, "qsocks").then(function(ticket){
  config.ticket = ticket;
  qsocks.ConnectOpenApp(config).then(function(result){
    var global = result[0];
    var app = result[1];
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
});
