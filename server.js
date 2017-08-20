let orm = require('./config/orm.js');

let express = require('express');
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.static('public'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

let methOver = require('method-override');
app.use(methOver('_method'));

let expHbars = require('express-handlebars');
app.engine('handlebars', expHbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
  console.log('Connected');
});
