async function listarEmpresa() {
    try {
      const response = await fetch('/empresas');
      const empresas = await response.json(); 
  
      const tbody = document.querySelector('table tbody');
      tbody.innerHTML = '';
  
      empresas.forEach((empresa, index) => {
        const row = `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${empresa.nombre}</td>
            <td>${empresa.direccion}</td>
            <td>${empresa.telefono}</td>
            <td>${empresa.estado}</td>
            <td>
              <button class="btn btn-primary" onclick="editarEmpresa('${empresa.idEmpresa}')">Editar</button>
              <button class="btn btn-danger" onclick="eliminarEmpresa('${empresa.idEmpresa}')">Eliminar</button>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
  
    } catch (error) {
      console.error('Error al listar las empresas:', error);
    }
  }
