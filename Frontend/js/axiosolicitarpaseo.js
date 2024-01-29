
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault();

    });
});

function solicitarpaseo() {

    // Llamar a la función para obtener el ID del cliente del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const idCliente = usuario.idusuario;
  
    console.log(idCliente)
  
    const tipo_mascota = document.getElementById('tipo_mascota').value;
    const duracion = document.getElementById('duracion').value;
    const direccion = document.getElementById('direccion').value;
    const fecha = document.getElementById('fecha').value;
  
    const fechaInput = document.getElementById("fecha");
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fechaInput.value);
  
    console.log(fechaInput)
    console.log(fechaActual)
    console.log(fechaSeleccionada)
  
  
    if (fechaSeleccionada < fechaActual) {
      alert("Debe seleccionar una fecha actual o posterior.");
      return false;
    }
  
    const requestData = {
      tipo_mascota: tipo_mascota,
      direccion: direccion,
      duracion: duracion,
      fecha: fecha,
      idCliente: idCliente
  
    };
  
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/solicitar_paseo', // URL del endpoint para solicitar el servicio en el backend
      headers: {
        'Content-Type': 'application/json'
      },
      data: requestData ,
      withCredentials: true // Habilitar cookies de sesión
  
    };
  
  
    axios(config)
      .then(response => {
        const data = response.data;
        console.log(data); 
        alert("Servicio solicitado exitosamente.");
       
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Hubo un problema durante la solicitud del servicio. Por favor, inténtalo de nuevo más tarde.");
        }
      });
  }
  