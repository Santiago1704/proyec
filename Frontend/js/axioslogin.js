document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
      event.preventDefault();
      login();
    });
  });
  
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Cambiado de 'pass' a 'password'
  
    const requestData = {
      email: email,
      password: password
    };
  
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/login',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      },
      data: requestData
    };
  
    axios(config)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.message === "Logged in successfully") {
            alert("Has iniciado sesión correctamente");
  
            const tipoUsuarioMap = {
              1: "administrador",
              2: "usuario",
              3: "paseador"
            };
  
            const tipoUsuario = tipoUsuarioMap[data.dataLogin.idroles];
  
            guardarUsuarioEnLocalStorage({
              tipo_usuario: tipoUsuario,
              correo: data.dataLogin.correo,
              nombre: data.dataLogin.nombre,
              id: data.dataLogin.id
            });
  
            redirigirSegunTipoUsuario(tipoUsuario);
          }
        }
      })
      .catch(error => {
        
      });
  }
  
  function redirigirSegunTipoUsuario(tipoUsuario) {
    switch (tipoUsuario) {
      case "administrador":
        console.log("Redirigir a la página del admin");
        window.location.href = '../html/administrador.html';
        break;
      case "usuario":
        console.log("Redirigir a la página del paseador");
        window.location.href = '../html/usuario.html';
        break;
      case "paseador":
        console.log("Redirigir a la página del usuario");
        window.location.href = '../html/paseador.html';
        break;
      default:
        console.log("Tipo de usuario desconocido");
    }
  }
  
  function manejarErrores(error) {
    if (error.response && error.response.status === 401) {
      console.log("Email o contraseña incorrectos");
      alert("Email o contraseña incorrectos");
    } else {
      console.error(error);
      alert("Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.");
    }
  }
  
  function guardarUsuarioEnLocalStorage(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  
  // Agrega un evento 'submit' al formulario
  document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga de la página
    login();
  });
  