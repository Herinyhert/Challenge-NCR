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

  // Habilitar o deshabilitar los botones de paginación según corresponda
  const hayPaginaAnterior = paginaActual > 1;
  const hayPaginaSiguiente = indiceUltimaCuenta < cuentas.length;

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
                  : "Cuenta Sin Identificada"}
              </p>
              <p>Número de Cuenta: ? {cuenta.n}: </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="botones-paginacion">
        {hayPaginaAnterior && <button onClick={irPaginaAnterior}>Anterior</button>}
        {hayPaginaSiguiente && <button onClick={irPaginaSiguiente}>Siguiente</button>}
      </div>
    </div>
  );
}

export default Home;