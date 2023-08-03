import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatosDeAPI();
  }, []);

  async function obtenerDatosDeAPI() {
    try {
      const response = await axios.get('/'); // Ruta de la API en el backend
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
        {datos && datos.map((item, index) => (
          <p key={index}>Dato: {item}</p>
        ))}
      </div>
    </div>
  );
}
Verifica cómo estás asignando el valor de datos. Asegúrate de que datos sea un array válido con los datos que esperas mostrar en la página.
Si después de revisar y realizar estos ajustes sigues teniendo problemas, por favor, proporciona más detalles sobre cómo se define y se asigna el valor de datos en el archivo App.js, así como cualquier otro código relevante. Esto me permitirá proporcionarte una solución más específica. Estoy aquí para ayudarte en todo lo que pueda.







export default App;
