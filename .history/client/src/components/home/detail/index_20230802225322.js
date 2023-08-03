import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import img2 from "../../logo/Imagen1.png";


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
                <div className="containerNav">
      <img className="imgLogo" src={img2} alt="logo" />
      </div>
          <p>Saldo: {cuenta.saldo}</p>
          <p>
            Tipo de Cuenta:{" "}
            {cuenta.tipo_letras === "CC"
              ? "Cuenta Corriente"
              : cuenta.tipo_letras === "CA"
              ? "Caja de Ahorro"
              : ""}{" "}
            en{" "}
            {cuenta.moneda === "u$s"
              ? "Dolares"
              : cuenta.moneda === "$"
              ? "Pesos"
              : ""}
          </p>
          <p>Número de Cuenta: {cuenta.n}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default AccountDetail;
