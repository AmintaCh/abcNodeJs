async function eliminarEmpresa(idEmpresa) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta empresa?');
  
    if (confirmacion) {
      try {
        const response = await fetch(`/empresas/eliminar/${idEmpresa}`, {
          method: 'DELETE',
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert(result.message);
          listarEmpresa(); 
        } else {
          alert('Error al eliminar la empresa');
        }
      } catch (error) {
        console.error('Error al eliminar la empresa:', error);
      }
    }
  }
  