const express = require('express');
const cors = require('cors');
const connection = require('./db/config'); // Importamos la conexión desde db.js

const app = express();

// cors
app.use(cors());

// public directory
app.use(express.static('public'));

// Lectura y parseo del body

app.use(express.json());


// Rutas de la API

app.use('/api/system-data', require('./routes/system-data'));

// Escuchar peticiones

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
