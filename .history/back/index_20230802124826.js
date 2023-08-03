// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");

// const app = express();
// const port = 3010;

// app.use(
//     express.urlencoded({
//         extended: true
//     })
// );

// app.use(express.json({
//     type: "*/*"
// }))

// app.use(cors());

// app.get("/cuentas", async (req, res) => {
//     try {
//       const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
//       res.json(response.data);
//     } catch (error) {
//       console.error('Error al obtener los datos de la API:', error.message);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     }
//   });

//   app.get("/cuentas", async (req, res) => {
//     try {
//       const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
//       res.json(response.data);
//     } catch (error) {
//       console.error('Error al obtener los datos de la API:', error.message);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     }
//   });

// //   app.get("/cuentas/:id", async (req, res) => {
// //     const id  = req.params;
// //     try {
// //       const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
// //       res.json(response.data);
// //     } catch (error) {
// //       console.error('Error al obtener los datos de la API:', error.message);
// //       res.status(500).json({ error: 'Error al obtener los datos de la API' });
// //     }
// //   });


// app.listen(port, () =>{
//     console.log(`Estoy ejecutando en http://localhost:${port}`);
// })

const express = require('express');
const axios = require('axios');

const path = require('path');

const app = express();

// Ruta para obtener los datos de la API
app.get('/api/cuentas', async (req, res) => {
    try {
      const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
  
      // Si la respuesta no es de tipo JSON, lanzamos un error
      if (!response.headers['content-type'].includes('application/json')) {
        throw new Error('Respuesta no válida: no es JSON');
      }
  
      res.json(response.data);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error.message);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    }
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
