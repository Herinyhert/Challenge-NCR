import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";

export default function AccountDetail(props) {
  const [cuenta, setCuenta] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    obtenerDatoID();
  }, []);

  async function obtenerDatoID() {
    try {
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
