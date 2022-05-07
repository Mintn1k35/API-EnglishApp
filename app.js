const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const db = require('./src/config/database.config')
const router = require('./src/routes/index')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
//Connect database
db.connect();


app.use(morgan('short'))
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.static(path.join(__dirname,'/src/public')));
// app.use(express.static(path.join(__dirname, '/src/views/dist/app')));
app.use(methodOverride('X-HTTP-Method')) //          Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override')) //      IBM
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

router(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})