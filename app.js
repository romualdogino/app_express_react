require('dotenv-safe').config({
    allowEmptyValues: true,
    example: './.env.example'
})
const fs = require('fs')
const jwt = require('jsonwebtoken')
const express = require('express');
const httpProxy = require('express-http-proxy')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');

const app = express();

// const userServiceProxy = httpProxy('http://localhost:3000')
// const productsServiceProxy = httpProxy('http://localhost:3000')

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  const publicKey = fs.readFileSync('./public.key','utf8')
  jwt.verify(token, publicKey,{algorithm: ["RS256"]}, function(err, decoded) {
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
app.use('/users', verifyJWT, (req, res, next) =>{
  usersRouter(req, res, next)
})
app.post('/login', (req, res, next) => {
    if(req.body.user === 'luiz' && req.body.pwd === '123'){
      console.log(req.body)
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const privateKey = fs.readFileSync('./private.key', 'utf8')
      var token = jwt.sign({ id }, privateKey, {
        expiresIn: 30000, // expires in 5min
        algorithm: "RS256"
      });
      res.status(200).send({ auth: true, token: token });
    }
    
    res.status(500).send('Login inválido!');
  })
  app.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  })

module.exports = app
