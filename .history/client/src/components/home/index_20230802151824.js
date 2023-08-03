import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    obtenerDatosDeAPI();
  }, []);

  async function obtenerDatosDeAPI() {
    try {
      const response = await axios.get("/cuentas");
      setCuentas(response.data.cuentas); 
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
    }
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <div>
        {cuentas.map((cuenta) => (
          <Link to={`/cuentas/${cuenta.n}`}>
            <div className="dato" key={n}>
              <p>
                {cuenta.tipo_letras === "CC"
                  ? "Cuenta Corriente"
                  : cuenta.tipo_letras === "CA"
                  ? "Caja de Ahorro"
                  : ""}
              </p>
              <p>Número de Cuenta: {cuenta.n}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
