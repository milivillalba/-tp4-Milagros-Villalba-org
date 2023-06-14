const express = require("express"); //infortar expres

//crear una instancia de la ruta
const router = express.Router();
//importar los controladores
const controladores = require("../controllers/app.controllers");

//ruta para la peticion GET
router.get("/", controladores.get);

//ruta para la peticion POST
router.post("/", controladores.post);

//ruta para la peticion PUT
router.put("/", controladores.put);

//ruta para la peticion DELETE
router.delete("/", controladores.delete);

// Exportaciones
module.exports = router;
