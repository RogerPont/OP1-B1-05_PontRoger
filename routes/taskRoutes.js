// 1. Importem Express i el controlador de tasques
const express = require('express');
const router = express.Router();
const controladorTasques = require('../controllers/taskController');

// 2. Rutes de l'API (/api/tasks)
router.post('/', controladorTasques.crearTasca);
router.get('/', controladorTasques.obtenirTasques);
router.get('/:id', controladorTasques.obtenirTascaPerId);
router.put('/:id', controladorTasques.actualitzarTasca);
router.delete('/:id', controladorTasques.eliminarTasca);

// 3. Exportem el router
module.exports = router;
