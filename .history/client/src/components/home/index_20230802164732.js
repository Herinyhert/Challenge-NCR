import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [cuentas, setCuentas] = useState([]);
  const cuentasPorPagina = 5;
  const [paginaActual, setPaginaActual] = useState(1);

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

  // Lógica para obtener las cuentas que se mostrarán en la página actual
  const indiceUltimaCuenta = paginaActual * cuentasPorPagina;
  const indicePrimeraCuenta = indiceUltimaCuenta - cuentasPorPagina;
  const cuentasPaginaActual = cuentas.slice(indicePrimeraCuenta, indiceUltimaCuenta);

  // Funciones para cambiar de página
  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const irPaginaSiguiente = () => {
    if (indiceUltimaCuenta < cuentas.length) {
      setPaginaActual(paginaActual + 1);
    }
  };

  return (
    <div>
      <h1>Datos de la API</h1>
      <div className="contenedor-cuentas">
        {cuentasPaginaActual.map((cuenta) => (
          <Link to={`/cuentas/${cuenta.n}`} key={cuenta.n}>
            <div className="cuenta">
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
      <div className="botones-paginacion">
        <button onClick={irPaginaAnterior} disabled={paginaActual === 1}>
          Anterior
        </button>
        <button onClick={irPaginaSiguiente} disabled={indiceUltimaCuenta >= cuentas.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Home;

