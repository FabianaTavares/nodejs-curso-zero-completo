const minimist = require("minimist")

// externo
const args = minimist(process.argv.slice(2))

// interno
const moduloSoma = require('./soma').soma

// moduloSoma(2,2)

const a = parseInt(args["a"])
const b = parseInt(args["b"])

moduloSoma(a, b);

