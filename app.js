const express = require("express");//importamos expres
const helmet = require('helmet');//importar helmet
const cors = require('cors');//importar cors
const morgan = require('morgan');//importar morgan
const miRutas = require("./src/routes/app.rutes");//traer rutas

//creamos el objeto de nuestra aplicacion
const app = express();

//configuracion asignar valor de la ip y puerto
const host =process.env.HOST || "localhost" ;
const port =process.env.PORT || 2082; //Eh utilizado el puerto 2082 porque segun internet si estamos usando HTTP,
                 // este puerto es popular yaque es utilizado para la gestión de servidores y servicios , a demas el puerto 6000 no funcionaba.

//Comfiguracion eh importar el pq dotenv
require("dotenv").config();

// Configurar los middlewares helmet, cors, morgan y express.json().
 app.use(helmet());//Helmet es para protección de seguridad
 app.use(cors());// Cors para permitir solicitudes desde diferentes orígenes
 app.use(morgan('dev'));//Morgan para registrar las solicitudes en la consola
 app.use(express.json());//para analizar las solicitudes entrantes en formato JSON

 //Rutas
 app.use("/",miRutas)

//para que el servidor escuche por la IP y el  puerto
app.listen(port,host,()=>{
    console.log("Servidor funcionando en :" ,host,":",port);
})