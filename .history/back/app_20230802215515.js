const express = require("express");
// const express = require("express");
const cors = require("cors");
// const cors = require("cors");
// const axios = require("axios");

// const fs = require('fs');
// const path = require('path');

const app = express();
// const app = express();
const port = 3010;
// const port = 3010;

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "*/*" }));
// app.use(express.json({ type: "*/*" }));
app.use(cors());
// app.use(cors());

const fs = require("fs");
const path = require("path");



// app.get("/api/datos", async (req, res) => {
//   try {
//     const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error al obtener los datos de la API:', error.message);
//     res.status(500).json({ error: 'Error al obtener los datos de la API' });
//   }
// });

// app.get("/cuentas/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const response = await axios.get('https://api.npoint.io/97d89162575a9d816661');
//     const data = response.data;

//     const cuenta = data.cuentas.find((cuenta) => cuenta.n === id);

//     if (cuenta) {
//       res.json(cuenta);
//     } else {
//       res.status(404).json({ error: 'Cuenta no encontrada' });
//     }
//   } catch (error) {
//     console.error('Error al obtener los datos de la API:', error.message);
//     res.status(500).json({ error: 'Error al obtener los datos de la API' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Estoy ejecutando en http://localhost:${port}`);
// });


app.get("/cuentas", (req, res) => {
  fs.readFile(path.join(__dirname, "database.json"), "utf8", (readError, jsonData) => {
    if (readError) {
      console.error("Error al leer el archivo JSON local:", readError.message);
      res.status(500).json({ error: "Error al obtener los datos del archivo local" });
    } else {
      try {
        const data = JSON.parse(jsonData);
        console.log("Datos del archivo local:", data);
        res.json(data);
      } catch (parseError) {
        console.error("Error al analizar el archivo JSON:", parseError.message);
        res.status(500).json({ error: "Error al obtener los datos del archivo local" });
      }
    }
  });
});

app.get("/cuentas/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile(path.join(__dirname, "database.json"), "utf8", (readError, jsonData) => {
    if (readError) {
      console.error("Error al leer el archivo JSON local:", readError.message);
      res.status(500).json({ error: "Error al obtener los datos del archivo local" });
    } else {
      try {
        const data = JSON.parse(jsonData);
        const cuenta = data.cuentas.find((cuenta) => cuenta.n === id);

        if (cuenta) {
          res.json(cuenta);
        } else {
          res.status(404).json({ error: "Cuenta no encontrada" });
        }
      } catch (parseError) {
        console.error("Error al analizar el archivo JSON:", parseError.message);
        res.status(500).json({ error: "Error al obtener los datos del archivo local" });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Estoy ejecutando json en http://localhost:${port}`);
});
