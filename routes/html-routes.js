const db = require("../models/index.js");

module.exports = function(app) {

  app.get('/', function(request, response) { //when you need data from multiple tables
    Promise.all([db.Burger.findAll({
      include: [db.Chef]
    }), db.Chef.findAll({
      include: [db.Burger]
    })])
    .then(function(data) {
      let hbsObject = {
        burgers: data[0],
        chefs: data[1]
      };
        console.log(hbsObject);
        response.render('index', hbsObject);
      });
    });

  app.get('/chef', function(request, response) { //get all the chefs
    db.Chef.findAll({
      include: [db.Burger]
    }).then(function(data) {
      let hbsObject = {
        chefs: data
      };
      console.log(hbsObject);
      response.render('chef', hbsObject);
    });
  });

  app.post('/', function(request, response) { //create new burger
    db.Burger.create({
      burger_name: request.body.burger_name,
      ChefId: request.body.chef
    }).then(function(data) {
      console.log(data.ChefId);
      response.redirect('/');
    });
  });

  app.post('/chef', function(request, response) { //create new chef (or burger place)
    db.Chef.create({
      chef_name: request.body.chef_name
    }).then(function(data) {
      response.redirect('/chef');
    });
  });

  app.put('/:id', function(request, response) { //edit burger ->change to devoured
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: request.params.id
      }
    })
    .then(function(data) {
      response.redirect('/');
    })
    .catch(function(error) {
      response.json(error);
    });
  });

};
