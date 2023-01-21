var userDb = require("../model/model");

//create and save new user
exports.create = (req, res) => {
     if (!req.body) {
          res.status(400).send({ message: "Content can not be empty" });
          return;
     }
     const user = new userDb({
          name: req.body.name,
          email: req.body.email,
          gender: req.body.gender,
          status: req.body.status,
     });

     user.save(user)
          .then((data) => {
               //res.send(data);
               res.redirect('/');
          })
          .catch((err) => {
               res.status(500).send({
                    message: err.message || "Some error occurred while creating new user",
               });
          });
};

