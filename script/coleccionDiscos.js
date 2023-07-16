const discos = [
    {
        titulo: 'Forest Hills Drive', 
        artista: 'J. Cole', 
        lanzamiento: '2014', 
        genero: 'hip-hop', 
        imagen: '../imagenes/forestHillsDrive.jpg'
    }, 
    {
        titulo: 'Good kid, maaD City', 
        artista: 'Kendrick Lamar', 
        lanzamiento: '2012', 
        genero: 'hip-hop',
        imagen: '../imagenes/goodKidMaadCity.jpg'
    }, 
    {
        titulo: 'Esto si es lo mío', 
        artista: 'Ismael Rivera', 
        lanzamiento: '1978', 
        genero: 'salsa',
        imagen: '../imagenes/estoSiEsLoMio.png'
    }, 
    {
        titulo: 'Ah Um', 
        artista: 'Charles Mingus', 
        lanzamiento: '1959',
        genero: 'jazz', 
        imagen: '../imagenes/ahUm.jpg'
    }, 
    {
        titulo: 'Chega de Saudade', 
        artista: 'Joao Gilberto', 
        lanzamiento: '1959', 
        genero: 'bossa-nova',
        imagen: '../imagenes/João Gilberto - Chega de Saudade (1959) CapaLPFront.jpg'
    }, 
    {
        titulo: 'Esto es tango!', 
        artista: 'Aníbal Troilo-Roberto Grela', 
        lanzamiento:'1962', 
        genero: 'tango', 
        imagen: '../imagenes/TROILO GRELA.jpg'
    }, 
    {
        titulo: 'Close to the edge', 
        artista: 'Yes', 
        lanzamiento: '1972', 
        genero: 'rock', 
        imagen: '../imagenes/Close to the Edge.png'
    },
    {
        titulo: 'Highway to hell',
        artista: 'ACDC',
        lanzamiento: '1979',
        genero: 'rock', 
        imagen: 'imagenes/ac-dc-highway-to-hell-1-768x768.jpg',
    }, 
    {
        titulo: 'Live at the Cheetah',
        artista: 'Fania all Stars',
        lanzamiento: '1971',
        genero: 'salsa', 
        imagen: '../imagenes/LiveatTheCheetah.jpg',
    }, 
    {
        titulo: 'Ready to die', 
        artista: 'Biggie Smalls', 
        lanzamiento: '1994', 
        genero: 'hip-hop', 
        imagen: '../imagenes/ReadyToDie.jpg', 
    }, 
    {
        titulo: 'Elis & Tom', 
        artista: 'Elis Regina - Tom Jobim', 
        lanzamiento: '1974', 
        genero: 'bossa-nova', 
        imagen: '../imagenes/Elis&tom.jpg', 
    },
    {
        titulo: 'Expansions', 
        artista: 'McCoy Tyner', 
        lanzamiento: '1968', 
        genero: 'Jazz', 
        imagen: '../imagenes/McCoy-Tyner-Expansions-album-cover-web-optimised-820-brightness-1024x1024.jpg', 
    }, 
    
];

// Función para mostrar los discos según el género seleccionado.
function mostrarDiscosPorGenero (){
    const generoSelector = document.getElementById ('selectorGeneros');
    const generoSeleccionado = generoSelector.value;
    const discosLista = document.getElementById ('discos-lista');
    discosLista.innerHTML = '';
    
    discos.forEach (function (disco) {
        if (disco.genero === generoSeleccionado){
            const tarjeta = document.createElement ('div');
            tarjeta.classList.add ('tarjeta');

            const imagen = document.createElement ('img');
            imagen.src = disco.imagen;
            tarjeta.appendChild (imagen);
            
            const titulo = document.createElement ('h3');
            titulo.textContent = disco.titulo;
            tarjeta.appendChild (titulo);

            const artista = document.createElement ('p');
            artista.textContent = 'Artista: ' + disco.artista;
            tarjeta.appendChild (artista);

            const lanzamiento = document.createElement ('p');
            lanzamiento.textContent = 'Año de lanzamiento: ' + disco.lanzamiento;
            tarjeta.appendChild (lanzamiento);
            const botonAgregar = document.createElement ('button');
            botonAgregar.textContent = 'Agregar';
            botonAgregar.addEventListener ('click', function(){
                agregarDiscoPersonal (disco);
            });

            tarjeta.appendChild (botonAgregar);
            discosLista.appendChild (tarjeta);
        }
    });
}

// Función para agregar un disco a la lista personal
function agregarDiscoPersonal (disco) {
    const nuevoElemento = document.createElement ('li');
    nuevoElemento.textContent = disco.titulo + ' - ' + disco.artista;
    const listaPersonal = document.getElementById ('lista-personal');
    listaPersonal.appendChild (nuevoElemento);
}


// Obtener elementos del DOM después de que se haya cargado el HTML
document.addEventListener("DOMContentLoaded", function () {
    const btnAgregarDisco = document.getElementById("btnAgregarDisco");
    const formularioAgregar = document.getElementById("formularioAgregar");
    const formulario = document.getElementById("formularioAgregarDisco");
    const selectorGeneros = document.getElementById('selectorGeneros');
  
    // Muestra el formulario al hacer clic en el botón
    btnAgregarDisco.addEventListener("click", function () {
      formularioAgregar.style.display = "block";
    });
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const titulo = document.getElementById("titulo").value;
      const artista = document.getElementById("artista").value;
      const lanzamiento = document.getElementById("lanzamiento").value;
      const genero = document.getElementById("genero").value;
      const imagen = document.getElementById("imagen").value;
  
      const nuevoDisco = {
        titulo: titulo,
        artista: artista,
        lanzamiento: lanzamiento,
        genero: genero,
        imagen: imagen,
      };
  
      discos.push(nuevoDisco);
  
      formulario.reset();
      formularioAgregar.style.display = "none";
      mostrarDiscosPorGenero();
    });
    
    //Asocio el evento ONchange del selector de género a la función mostrarDiscos por género
    selectorGeneros.addEventListener ("change", mostrarDiscosPorGenero)
    // Mostrar los discos iniciales al cargar la página
    mostrarDiscosPorGenero();
  });


