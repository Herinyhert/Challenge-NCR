const cuentasContainer = document.getElementById('cuentasContainer');
let cuentasData = [];

async function obtenerCuentas() {
  try {
    const response = await fetch('/api/cuentas');
    cuentasData = await response.json();
    mostrarCuentas();
  } catch (error) {
    console.error('Error al obtener las cuentas:', error.message);
  }
}

function mostrarCuentas() {
  cuentasContainer.innerHTML = '';

  const cuentasFiltradas = cuentasData.filter(cuenta => (cuenta.moneda === 'Pesos' || cuenta.moneda === 'Dólares') &&
    (cuenta.tipo === 'CA' || cuenta.tipo === 'CC'));

  const numBotonesPorPagina = 6;
  const paginaActual = 1;
  const inicio = (paginaActual - 1) * numBotonesPorPagina;
  const fin = inicio + numBotonesPorPagina;
  const cuentasPagina = cuentasFiltradas.slice(inicio, fin);

  cuentasPagina.forEach(cuenta => {
    const cuentaButton = document.createElement('button');
    cuentaButton.textContent = `${cuenta.tipo} - ${cuenta.numero}`;
    cuentaButton.addEventListener('click', () => mostrarInfoCuenta(cuenta));
    cuentasContainer.appendChild(cuentaButton);
  });
}

function mostrarInfoCuenta(cuenta) {
  cuentasContainer.innerHTML = '';

  const saldoP = document.createElement('p');
  saldoP.textContent = `Saldo: ${cuenta.saldo}`;
  cuentasContainer.appendChild(saldoP);

  const tipoP = document.createElement('p');
  tipoP.textContent = `Tipo de Cuenta: ${cuenta.tipo}`;
  cuentasContainer.appendChild(tipoP);

  const numeroP = document.createElement('p');
  numeroP.textContent = `Número de Cuenta: ${cuenta.numero}`;
  cuentasContainer.appendChild(numeroP);
}

document.addEventListener('DOMContentLoaded', obtenerCuentas);


function mostrarInfoCuenta(cuenta) {
  cuentasContainer.innerHTML = '';

  const saldoP = document.createElement('p');
  saldoP.textContent = `Saldo: ${cuenta.saldo}`;
  cuentasContainer.appendChild(saldoP);

  const tipoP = document.createElement('p');
  tipoP.textContent = `Tipo de Cuenta: ${cuenta.tipo}`;
  cuentasContainer.appendChild(tipoP);

  const numeroP = document.createElement('p');
  numeroP.textContent = `Número de Cuenta: ${cuenta.numero}`;
  cuentasContainer.appendChild(numeroP);
}

document.addEventListener('DOMContentLoaded', obtenerCuentas);
