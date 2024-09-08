const {obtenerPost, escribirPost} = require("./detalle");
const express = require("express"); 
const cors = require("cors");
const app = express(); 
const port = 3000;

app.listen(port, () => console.log("Servidor escuchado en puerto 3000"));
console.log("este es mi puerto:", port)
app.use(express.json());
app.use(cors());

app.get ("/posts", async(req,res) =>{
const alcanzarPost = await obtenerPost()
res.json(alcanzarPost);      
});

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    await escribirPost(titulo, url, descripcion);
    res.send("El post fue Agregado");
  }); 

