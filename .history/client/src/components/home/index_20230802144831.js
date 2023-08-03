import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../home/home.css"

function Home() {
  const [cuentas, setCuentas] = useState([]); // Actualizamos el nombre del estado a "cuentas"

  useEffect(() => {
    obtenerDatosDeAPI();
  }, []);

  async function obtenerDatosDeAPI() {
    try {
      const response = await axios.get('/cuentas');
      setCuentas(response.data.cuentas); // Actualizamos el nombre de la variable a "cuentas"
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
    }
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <div>
        {cuentas.map((cuenta, index) => (
          <div className='dato' key={index}>
            <p>Cuenta corriente ? {cuenta.tipo_letras} === CC : Caja de Arror</p>
            <p>Número de Cuenta: {cuenta.n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;