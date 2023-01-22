var axios = require('axios');

module.exports = (req, res) => {
    axios({
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-ioick/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'iMOS3LYI4RKGnDbruxuoVtKcra2Jq3s2nxDeELVHWP370bzxnREWyOa2knzz4MlU',
        },
        data: JSON.stringify({
            "collection": "userdbs",
            "database": "test",
            "dataSource": "Cluster0",
            "document": {
                "name": req.body.name,
                "phone": req.body.phone,
                "email": req.body.email,
                "gender": req.body.gender,
                "city": req.body.city,
                "college": req.body.college,
                "password": req.body.password,
            }
        })
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            res.redirect('/')
        })
        .catch(function (error) {
            console.log(error);
        });
}

