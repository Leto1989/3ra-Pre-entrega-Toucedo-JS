document.addEventListener('DOMContentLoaded', function() {
    let formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', crearUsuario);
  });
  
  function Usuario(nombre, email, contrasena) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
  }
  
  function crearUsuario(evento) {
    evento.preventDefault();
  
    let inputNombre = document.getElementById('nombre');
    let inputMail = document.getElementById('email');
    let inputContrasena = document.getElementById('contrasena');
  
    let nombre = inputNombre.value.trim();
    let email = inputMail.value.trim();
    let contrasena = inputContrasena.value.trim();
  
    if (nombre === '' || email === '' || contrasena === '') {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    let nuevoUsuario = new Usuario(nombre, email, contrasena);
    let usuarioJSON = JSON.stringify(nuevoUsuario);
    localStorage.setItem('usuario', usuarioJSON);
  
    inputNombre.value = '';
    inputMail.value = '';
    inputContrasena.value = '';
  
    alert('Usuario creado exitosamente');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let formularioInicioSesion = document.getElementById('formulario-inicio-sesion');
    formularioInicioSesion.addEventListener('submit', function(evento) {
      evento.preventDefault();
  
      let inputNombre = document.getElementById('nombre-inicio-sesion');
      let inputContrasena = document.getElementById('contrasena-inicio-sesion');
      let nombre = inputNombre.value.trim();
      let contrasena = inputContrasena.value.trim();
  
      let usuarioGuardadoJSON = localStorage.getItem('usuario');
      if (!usuarioGuardadoJSON) {
        alert('No hay ningún usuario registrado.');
        return;
      }
  
      let usuarioGuardado = JSON.parse(usuarioGuardadoJSON);
  
      if (nombre === usuarioGuardado.nombre && contrasena === usuarioGuardado.contrasena) {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
//REDIRECCIONO A UNA PAGINA DESPUES DEL INICIO EXITOSO
        window.location.href = '../pages/coleccionDiscos.html'

      } else {
        alert('Credenciales incorrectas. Por favor, verifique sus datos.');
      }
  
      inputNombre.value = '';
      inputContrasena.value = '';
    });
  });;