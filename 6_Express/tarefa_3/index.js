const express = require("express")
const app = express()
const port = 5000 // variavel ambiente

const path = require("path")

const users = require('./users')

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

// Middleware
/* const checkAuth = function(req, res, next) {
  req.authStatus = true

  // middleware
  if(req.authStatus) {
    console.log('está logado')
    next()
  } else {
    console.log('não está logado, faça o login')
    next()
  }
}

app.use(checkAuth) */

/* app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é: ${name} e ele tem ${age} anos`)

  res.sendFile(`${basePath}/userform.html`);
});

app.get('/users/:id', (req, res) => {

  const id = req.params.id

  // leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`);
}); */

app.use('/users', users)

app.get('/', (req, res) => {
  // res.send('Ola mundo!!')
  res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
})

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`)
})

