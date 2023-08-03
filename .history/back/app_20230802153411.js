const express = require("express");
const cors = require("cors");
const axios = require("axios");

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

app.get("/cuentas", async (req, res) => {
  try {
    const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
});

app.get("/cuentas/:id", async (req, res) => {
  const id = req.params.id; 
  try {
    const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
    const data = response.data;

    // Buscar la cuenta específica por id
    const cuenta = data.cuentas.find((cuenta) => cuenta.n === id);

    if (cuenta) {
      res.json(cuenta); // Devolver la cuenta específica encontrada
    } else {
      res.status(404).json({ error: 'Cuenta no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
});



app.listen(port, () =>{
    console.log(`Estoy ejecutando en http://localhost:${port}`);
})