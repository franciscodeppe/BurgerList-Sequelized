const express = require('express');
const bodyParser = require('body-parser');
const methOver = require('method-override');
const expHbars = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./public')); //HB //SEQ  was app/public
app.use(bodyParser.json()); //SEQ
app.use(bodyParser.urlencoded({ extended: false })); //both
app.use(bodyParser.text()); //SEQ
app.use(bodyParser.json({ type: 'application/vnd.api+json'})); //SEQ
app.use(methOver('_method')); //HB
app.engine('handlebars', expHbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/html-routes.js')(app);  //SEQ
//require('./routes/api-routes.js')(app);

const db = require('./models');

db.sequelize.sync({force:true}).then(function() {
app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});
});
