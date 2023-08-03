const express = require('express');
const axios = require('axios');
const app = express();

app.get("/api/datos", async (req, res) => {
  try {
    const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
});

// Resto del código del backend...

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
