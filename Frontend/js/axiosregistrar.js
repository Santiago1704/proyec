document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault();
      register_cliente();
  });
});

function register_cliente() {
  // Obtener datos del formulario
  const name = document.getElementById('name').value;
  const apellido = document.getElementById('apellido').value;
  const documento = document.getElementById('documento').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  

  // Validar campos
  if (name.trim() === '' || apellido.trim() === '' || documento.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert("Por favor, completa todos los campos obligatorios del formulario.");
      return; // Cancela el envío del formulario
  }

  const requestData = {
      name: name,
      apellido: apellido,
      documento: documento,
      email: email,
      password: password,
      telefono: telefono,
      direccion: direccion
      
  };

  const config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/register_cliente',
      headers: {
          'Content-Type': 'application/json'
      },
      data: requestData
  };

  // Realizar la solicitud POST utilizando el objeto de configuración
  axios(config)
      .then(response => {
          const data = response.data;

          if (data.message === "Cliente registrado exitosamente") {
              console.log("Cliente registrado exitosamente");
              alert("Cliente registrado exitosamente. Ahora puedes iniciar sesión.");
              // Redirigir a la página de inicio de sesión u otra página de tu elección
              window.location.href = '../html/login.html';
          } else {
              alert(data.message);
          }
      })
      .catch(error => {
          if (error.response && error.response.data && error.response.data.message) {
              alert(error.response.data.message);
          } else {
              alert("Hubo un problema durante el registro. Por favor, inténtalo de nuevo.");
          }
      });
}
