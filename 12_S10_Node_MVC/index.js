const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn');

const Task = require('./models/Task')
const taskRoutes = require('./routes/tasksRoutes')

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));



app.use('/tasks', taskRoutes)

conn
  .sync()
  //.sync({force: true})
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => console.log(err));