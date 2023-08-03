import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatosDeAPI();
  }, []);

  async function obtenerDatosDeAPI() {
    try {
      const response = await axios.get('/api/datos'); // Ruta de la API en el backend
      console.log(response.data);
      setDatos(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
    }
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <div>
        {datos.map((item, index) => (
          <p key={index}>Dato: {item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
