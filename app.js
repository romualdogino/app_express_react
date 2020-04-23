require('dotenv-safe').config({
  allowEmptyValues: true,
  example: './.env.example'
})
const fs = require('fs')
const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const httpProxy = require('express-http-proxy')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter')
const statusRouter = require('./routes/statusRouter')
const tipoitemRouter = require('./routes/tipoitemRouter')
const entradaRouter = require('./routes/entradaRouter')
const itemRouter = require('./routes/itemRoute')
const clienteRouter = require('./routes/clienteRoute')

const app = express();
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3001/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// const userServiceProxy = httpProxy('http://localhost:3000')
// const productsServiceProxy = httpProxy('http://localhost:3000')

function verifyJWT(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  const publicKey = fs.readFileSync('./public.key', 'utf8')
  jwt.verify(token, publicKey, { algorithm: ["RS256"] }, function (err, decoded) {
    if (err)
      return res.status(500)

        .send({ auth: false, message: 'Failed to authenticate token.' });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    console.log("User Id:" + decoded.id)
    next();
  });
}
app.use(logger('dev'));
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/',verifyJWT, (req, res, next) => {
//   userServiceProxy(req, res, next)})
// app.use('/users',verifyJWT,(req, res, next) => {
//   productsServiceProxy(req, res, next)})
app.use('/users', verifyJWT, (req, res, next) => {
  usersRouter(req, res, next)
})
app.use('/status', verifyJWT, (req, res, next) => {
  statusRouter(req, res, next)
})
app.use('/tipoitem', verifyJWT, (req, res, next) => {
  tipoitemRouter(req, res, next)
})
app.use('/entrada', verifyJWT, (req, res, next) => {
  entradaRouter(req, res, next)
})
app.use('/item', verifyJWT,(req, res, next) => {
  itemRouter(req, res, next)
})
app.use('/cliente', verifyJWT, (req, res, next) =>{
  clienteRouter(req, res, next)
})

app.use('/auth', authRouter)

module.exports = app
