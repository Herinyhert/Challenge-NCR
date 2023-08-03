import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";

export default function AccountDetail() {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    obtenerDatoID();
  }, []);

  async function obtenerDatoID() {
    try {
      const response = await axios.get("/cuentas");
      setCuentas(response.data.cuentas); 
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
    }
  }

  return (
    <div>
      <p>Consulta de saldo</p>
      <h1>Este es tu saldo actual</h1>
      <div className="detalle-cuentas">
        {cuentas.map((cuenta) => (
          <div key={cuenta.n}>
            <h2>Cuenta {cuenta.tipo_letras}</h2>
            <p>Número de Cuenta: {cuenta.n}</p>
            <p>Saldo: {cuenta.saldo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
