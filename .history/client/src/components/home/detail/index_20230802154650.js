import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";

export default function AccountDetail() {
  const [cuenta, setCuenta] = useState(null);

  useEffect(() => {
    obtenerDatoID();
  }, []);

  async function obtenerDatoID() {
    try {
      const id = "872378326702"; // Coloca aquí el id de la cuenta que deseas obtener
      const response = await axios.get(`/cuentas/${id}`);
      setCuenta(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
    }
  }

  return (
    <div>
      <p>Consulta de saldo</p>
      <h1>Este es tu saldo actual</h1>
      {cuenta ? (
        <div>
          <h2>Cuenta {cuenta.tipo_letras}</h2>
          <p>Número de Cuenta: {cuenta.n}</p>
          <p>Saldo: {cuenta.saldo}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
