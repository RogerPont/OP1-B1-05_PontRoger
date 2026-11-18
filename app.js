// 1. Imports i configuració
const express = require('express');
const rutesTasques = require('./routes/taskRoutes');

const app = express();

// 2. Middleware per llegir JSON
app.use(express.json());

// 3. Rutes
app.get('/', (req, res) => {
    res.status(200).send('<h1>BENVINGUT AL GESTOR DE TASQUES</h1>');
});

app.use('/api/tasks', rutesTasques);

// 4. Ruta 404 (quan la ruta no existeix)
app.use((req, res) => {
    res.status(404).json({
        estat: "error",
        missatge: "Ruta no trobada",
        ruta: req.originalUrl
    });
});

module.exports = app;
