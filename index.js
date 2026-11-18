// 1. Carreguem les variables d'entorn del fitxer .env
require('dotenv').config();

// 2. Imports
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskmanager';

// 3. Connexió a MongoDB
mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connectat correctament a MongoDB');
    })
    .catch((error) => {
        console.log('Error de connexió a MongoDB:', error.message);
    });

// 4. Engegar el servidor
app.listen(port, () => {
    console.log(`Servidor en funcionament a http://localhost:${port}`);
    console.log('Per parar el servidor fes Ctrl+C');
});
