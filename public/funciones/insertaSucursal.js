async function insertarSucursal(event) {
    event.preventDefault();
console.log('estoy en la funcion insertar sucursal');
    const form = document.getElementById('FormSucursal');
    const formData = new FormData(form); 
  
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value; 
    });
  
    try {
      const response = await fetch('/sucursales/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        alert(responseData.message); 
      } else {
        alert('Error: ' + responseData.error);
      }
    } catch (error) {
      alert('Error de red: ' + error.message);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('FormSucursal').addEventListener('submit', insertarSucursal);
  });
  