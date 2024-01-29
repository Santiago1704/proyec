function obtener_usuarios() {
  const url = "http://127.0.0.1:8000/obtener_usuarios";

  axios.get(url)
    .then(response => {
      const usuarios = response.data;
      const tablaUsuarios = document.getElementById('tabla-usuarios');

      // Vaciar la tabla antes de agregar nuevos registros
      tablaUsuarios.innerHTML = '';

      usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${usuario.nombre}</td>
          <td>${usuario.apellido}</td>
          <td>${usuario.documento}</td>
          <td>${usuario.correo}</td>
          <td>${usuario.telefono}</td>
         
        `;
        tablaUsuarios.appendChild(row);
      });
    })
    .catch(error => {
      console.error(error);
      alert("Hubo un problema al obtener los informes solicitados. Por favor, inténtalo de nuevo más tarde.");
    });
}




/* function pdf_a1() {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF();

  axios({
    method: 'GET',
    url: 'http://127.0.0.1:8000/verinformes_cliente',
  })
  .then(function (response) {
    var cuerpo = [];
    for (let i = 0; i < response.data.length; i++) {
      cuerpo.push([
        response.data[i].id_informe,
        response.data[i].id_tecnico,
        response.data[i].nombre,
        formatDate(response.data[i].fecha),
        response.data[i].tipo_servicio,
        response.data[i].descripcion_servicio,
        response.data[i].recomendacion,
      ]);
    }

    var pdf = new jsPDF();
    pdf.text(20, 20, "Informe de tus servicios");

    var columns = ["ID informe", "ID Tecnico", "Nombre del tecnico", "Fecha", "Tipo de servicio", "Descripcion" , "Resultados"];
    pdf.autoTable(columns, cuerpo, { margin: { top: 25 } });

    pdf.save('Informe.pdf');
  })
  .catch(err => console.log('Error: ', err));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
}  


function redirigirAPagina() {
  window.location.href = '/Front-end/html/cliente/estadosolicitudes.html'; // Cambia la ruta según corresponda
} */