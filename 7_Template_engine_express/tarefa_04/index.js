const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/', (req, res) => {

  const products = [
    {
      title: 'TV',
      category: 'Eletronics',
      body: 'TV 32" 4k LG',
      stars: 5,
    },
    {
      title: 'mouse',
      category: 'home office',
      body: 'the best mouse off Generation',
      stars: 3,
    },
  ];

  res.render('home', { products });
})

app.listen(3001, () => {
  console.log('App funcionando!')
})