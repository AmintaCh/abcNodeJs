async function insertarDatos(event) {
    event.preventDefault(); 
  
    const form = document.getElementById('miFormulario');
    const formData = new FormData(form); 
  
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value; 
    });
  
    try {
      const response = await fetch('/empresas/crear', {
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
    document.getElementById('miFormulario').addEventListener('submit', insertarDatos);
  });
  

  
  
