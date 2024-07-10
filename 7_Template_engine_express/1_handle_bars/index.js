const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

  const itens = ["item a", "item b", "item c"]

  res.render('dashboard', {itens});
})

app.get('/post', (req, res) => {
  const post = {title: 'Aprender Node.js', category: 'Javascript', body: 'Este artigo vai te ajudar a aprender node.js', comments: 4};

  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Javascript',
      body: 'Este artigo vai te ajudar a aprender node.js',
      comments: 4,
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'Este artigo vai te ajudar a aprender PHP',
      comments: 7,
    },
  ];

  res.render('blog', { posts });
});

app.get('/', (req, res) => {

  const user = {
    name: "Fabi",
    surname: "Tavares",
    age: 30
  }

  const palavra = "teste"

  const auth = true

  const approved = false

  res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3001, () => {
  console.log('App funcionando!')
})