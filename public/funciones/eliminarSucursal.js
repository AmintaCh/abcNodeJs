async function eliminarSucursal(idSucursal) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta sucursal?');
  
    if (confirmacion) {
      try {
        const response = await fetch(`/sucursales/eliminar/${idSucursal}`, {
          method: 'DELETE',
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert(result.message);
          listarSucursal(); 
        } else {
          alert('Error al eliminar la sucursal');
        }
      } catch (error) {
        console.error('Error al eliminar la sucursal:', error);
      }
    }
  }