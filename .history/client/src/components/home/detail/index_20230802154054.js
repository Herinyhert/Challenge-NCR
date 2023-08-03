export default function AccountDetail() {
  
  return (
    <div>
      <p>Consulta de saldo</p>
      <h1>Este es tu saldo actual</h1>
    </div>
  );
}
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

