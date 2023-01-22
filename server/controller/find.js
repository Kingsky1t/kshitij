var axios = require('axios');
var data = JSON.stringify({
     "collection": "userdbs",
     "database": "test",
     "dataSource": "Cluster0",
     "projection": {
          "_id": 1
     }
});

var config = {
     method: 'post',
     url: 'https://data.mongodb-api.com/app/data-ioick/endpoint/data/v1/action/findOne',
     headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': 'iMOS3LYI4RKGnDbruxuoVtKcra2Jq3s2nxDeELVHWP370bzxnREWyOa2knzz4MlU',
     },
     data: data
};
module.exports = (req, res) => {
     axios(config)
          .then(function (response) {
               console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
               console.log(error);
          });
}

