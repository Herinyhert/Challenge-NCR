async function obtenerCuentas() {
    try {
      const response = await fetch('/api/cuentas');
      if (!response.ok) {
        throw new Error('No se pudieron obtener los datos de la API');
      }
      cuentasData = await response.json();
      console.log('Datos recibidos:', cuentasData); // Añade este mensaje de registro
      mostrarCuentas();
    } catch (error) {
      console.error('Error al obtener las cuentas:', error.message);
    }
  
}

export default obtenerCuentas