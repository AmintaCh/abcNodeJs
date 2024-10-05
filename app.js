const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const empresaRoutes = require('./routes/empresa');
const sucursalRoutes = require('./routes/sucursales');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/empresas', empresaRoutes);
app.use('/sucursales', sucursalRoutes);

app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/formSucursal', (req, res) => {
  res.render('formSucursal'); 
});

app.get('/empresas/crear', (req, res) => {
  res.render('createEmpresa'); 
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
