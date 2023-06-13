const express = require("express")//importamos expres

//creamos el objeto de nuestra aplicacion
const app = express();

app.get("/",(req,res)=>{
   res.send ("hola mili")
})


//para que el servidor escuche por algun puerto
app.listen(3000,()=>{
    console.log("puerto del servidor",3000);
})