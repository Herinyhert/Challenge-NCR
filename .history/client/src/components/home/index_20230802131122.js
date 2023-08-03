async function obtenerDatosDeAPI() {
    try {
      const response = await fetch('/api/datos'); // Ruta de la API en el backend
      if (!response.ok) {
        throw new Error('No se pudieron obtener los datos');
      }
      const data = await response.json();
      mostrarDatos(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
    }
  }
  
  function mostrarDatos(data) {
    datosContainer.innerHTML = '';
  
    data.forEach(item => {
      const dataItem = document.createElement('p');
      dataItem.textContent = `Dato: ${item}`;
      datosContainer.appendChild(dataItem);
    });
  }
  

export default obtenerDatosDeAPI;