// Importem el model Tasca
const Tasca = require('../models/Task');

// 1. Crear una nova tasca (POST /api/tasks)
const crearTasca = (req, res) => {
    // Si la tasca es marca com a completada, guardem la data actual a finished_at
    if (req.body.completed === true) {
        req.body.finished_at = new Date();
    } else {
        req.body.finished_at = null;
    }

    const novaTasca = new Tasca(req.body);

    novaTasca.save()
        .then((tascaGuardada) => {
            res.status(201).json({
                estat: "success",
                missatge: "Tasca creada correctament",
                data: tascaGuardada
            });
        })
        .catch((error) => {
            res.status(400).json({
                estat: "error",
                missatge: "Dades invàlides en crear la tasca",
                detalls: error.message
            });
        });
};

// 2. Obtenir totes les tasques (GET /api/tasks)
const obtenirTasques = (req, res) => {
    Tasca.find()
        .then((tasques) => {
            res.status(200).json({
                estat: "success",
                data: tasques
            });
        })
        .catch((error) => {
            res.status(500).json({
                estat: "error",
                missatge: "Error en obtenir les tasques"
            });
        });
};

// 3. Obtenir una tasca pel seu ID (GET /api/tasks/:id)
const obtenirTascaPerId = (req, res) => {
    const id = req.params.id;

    Tasca.findById(id)
        .then((tasca) => {
            if (!tasca) {
                return res.status(404).json({
                    estat: "error",
                    missatge: "Tasca no trobada"
                });
            }

            res.status(200).json({
                estat: "success",
                data: tasca
            });
        })
        .catch((error) => {
            res.status(404).json({
                estat: "error",
                missatge: "Tasca no trobada"
            });
        });
};

// 4. Actualitzar una tasca pel seu ID (PUT /api/tasks/:id)
const actualitzarTasca = (req, res) => {
    const id = req.params.id;

    // Si es marca com a completada, posem la data; si es desmarca, posem null
    if (req.body.completed === true) {
        req.body.finished_at = new Date();
    } else if (req.body.completed === false) {
        req.body.finished_at = null;
    }

    Tasca.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then((tascaActualitzada) => {
            if (!tascaActualitzada) {
                return res.status(404).json({
                    estat: "error",
                    missatge: "Tasca no trobada"
                });
            }

            res.status(200).json({
                estat: "success",
                missatge: "Tasca actualitzada correctament",
                data: tascaActualitzada
            });
        })
        .catch((error) => {
            res.status(400).json({
                estat: "error",
                missatge: "Error en actualitzar la tasca",
                detalls: error.message
            });
        });
};

// 5. Eliminar una tasca pel seu ID (DELETE /api/tasks/:id)
const eliminarTasca = (req, res) => {
    const id = req.params.id;

    Tasca.findByIdAndDelete(id)
        .then((tascaEliminada) => {
            if (!tascaEliminada) {
                return res.status(404).json({
                    estat: "error",
                    missatge: "Tasca no trobada"
                });
            }

            res.status(200).json({
                estat: "success",
                missatge: "Tasca eliminada correctament",
                data: tascaEliminada
            });
        })
        .catch((error) => {
            res.status(404).json({
                estat: "error",
                missatge: "Tasca no trobada"
            });
        });
};

// Exportem les funcions del controlador
module.exports = {
    crearTasca,
    obtenirTasques,
    obtenirTascaPerId,
    actualitzarTasca,
    eliminarTasca
};
