import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [cuentas, setCuentas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cuentasPerPage = 5; // Cantidad de cuentas a mostrar por página

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

  const indexOfLastCuenta = currentPage * cuentasPerPage;
  const indexOfFirstCuenta = indexOfLastCuenta - cuentasPerPage;
  const cuentasPaginadas = cuentas.slice(indexOfFirstCuenta, indexOfLastCuenta);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(cuentas.length / cuentasPerPage);

  return (
    <div>
      <h1>Datos de la API</h1>
      <div>
        {cuentasPaginadas.map((cuenta) => (
          <Link to={`/cuentas/${cuenta.n}`} key={cuenta.n}>
            <div className="dato">
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

      <div>
        {!isFirstPage && (
          <button onClick={() => paginate(currentPage - 1)}>
            Opciones anteriores
          </button>
        )}
        {!isLastPage && (
          <button onClick={() => paginate(currentPage + 1)}>Más opciones</button>
        )}
      </div>
    </div>
  );
}

export default Home;

