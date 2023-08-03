import React, { useState, useEffect } from "react";
import axios from "axios";
import "../home/home.css";
import { Link } from "react-router-dom";

function Home() {
  const [cuentas, setCuentas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cuentasPerPage = 6; // Cantidad de cuentas a mostrar por página

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

  // Lógica para obtener las cuentas a mostrar en la página actual
  const indexOfLastCuenta = currentPage * cuentasPerPage;
  const indexOfFirstCuenta = indexOfLastCuenta - cuentasPerPage;
  const cuentasPaginadas = cuentas.slice(indexOfFirstCuenta, indexOfLastCuenta);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      {/* Botones de paginación */}
      <div>
        <button onClick={() => paginate(currentPage - 1)}>
          Opciones anteriores
        </button>
        {Array.from({ length: Math.ceil(cuentas.length / cuentasPerPage) }).map(
          (item, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
        <button onClick={() => paginate(currentPage + 1)}>Más opciones</button>
      </div>
    </div>
  );
}

export default Home;
