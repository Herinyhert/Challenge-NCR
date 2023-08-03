import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AccountDetail(props) {
  const [cuenta, setCuenta] = useState(null);
  const { id } = useParams();

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
          <p>Tipo de Cuenta: {cuenta.tipo_letras === "CC"
                  ? "Cuenta Corriente"
                  : cuenta.tipo_letras === "CA"
                  ? "Caja de Ahorro"
                  : ""} en {cuenta.moneda === "CC"
                  ? "Cuenta Corriente"
                  : cuenta.tipo_letras === "CA"
                  ? "Caja de Ahorro"
                  : ""}</p>
          <p>Número de Cuenta: {cuenta.n}</p>
          <p>Saldo: {cuenta.saldo}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default AccountDetail;