import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import { Link } from "react-router-dom";
import Card from "../Card";

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



<Link to={`/countries/${el.id}`}>
<Card
    key={el.id}
    name={el.name}
    flag={el.flag}
    region={el.region}
    capital={el.capital}
    id={el.id}
    population={el.population}
/>
</Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
