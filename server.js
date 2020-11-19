//usando la libreria de expres para peticiones http
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./helpers/helpers');
// toda vista pasa por la carpeta public
app.use(express.static(__dirname+'/public'));

//Engine de HBS Express
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Helpers

app.get('/', function (req, res) {

  res.render('home',{
      name:'HArdy BaiLey'
      
  })
  
})
app.get('/about', function (req, res) {

    res.render('about')
    
  })
 
app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`);
})