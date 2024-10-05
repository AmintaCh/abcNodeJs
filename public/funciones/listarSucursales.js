async function listarSucursal() {
    try {
      const response = await fetch('/sucursales');
      const sucursales = await response.json();
  
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML = '';
  
      sucursales.forEach((sucursal, index) => {
        const row = `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${sucursal.direccion}</td>
            <td>${sucursal.telefono}</td>
            <td>${sucursal.encargado}</td>
            <td>${sucursal.estado}</td>
            <td>
              <button class="btn btn-primary" onclick="editarSucursal('${sucursal.idSucursal}')">Editar</button>
              <button class="btn btn-danger" onclick="eliminarSucursal('${sucursal.idSucursal}')">Eliminar</button>
            </td>
          </tr>
        `;

        tbody.innerHTML += row;
      });
  
    } catch (error) {
      console.error('Error al listar las sucursales:', error);
    }
  }
