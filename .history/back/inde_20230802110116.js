const express = require("express");
const cors = require("cors");

const app = express();
const port = 3010;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.get("/prueba", (req, res)=>{
    res.send("Hola, estoy funcionando")
})

app.listen(port, () =>{
    console.log("Estoy ejecutando en http://localhost");
})