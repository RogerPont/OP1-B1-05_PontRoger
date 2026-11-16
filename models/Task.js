// 1. Importem Mongoose
const mongoose = require('mongoose');

// 2. Definim l'esquema de la tasca (els noms dels camps són els que demana l'enunciat)
const esquemaTasca = new mongoose.Schema({
    // Títol de la tasca (obligatori)
    title: {
        type: String,
        required: true
    },
    // Descripció de la tasca (opcional)
    description: {
        type: String
    },
    // Cost estimat de la tasca (obligatori i no pot ser negatiu)
    cost: {
        type: Number,
        required: true,
        min: 0
    },
    // Previsió d'hores (obligatori i no pot ser negatiu)
    hours_estimated: {
        type: Number,
        required: true,
        min: 0
    },
    // Hores reals invertides (opcional i no pot ser negatiu)
    hours_real: {
        type: Number,
        min: 0,
        default: 0
    },
    // URL o ruta de la imatge (opcional)
    image: {
        type: String
    },
    // Estat de la tasca: completada o no (per defecte false)
    completed: {
        type: Boolean,
        default: false
    },
    // Data de finalització quan es completa la tasca
    finished_at: {
        type: Date,
        default: null
    },
    // Data de creació automàtica
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 3. Exportem el model Tasca
const Tasca = mongoose.model('Task', esquemaTasca);
module.exports = Tasca;
