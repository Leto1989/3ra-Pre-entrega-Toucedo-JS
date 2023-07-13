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
    }
];

//Función para mostrar los discos según el género seleccionado.

function mostrarDiscosPorGenero (){
    const generoSelector = document.getElementById ('selector-generos');
    const generoSeleccionado = generoSelector.value;
    const discosLista = document.getElementById ('discos-lista');
    discosLista.innerHTML = '';
    
    discos.forEach (function (disco) {
        if (disco.genero ===generoSeleccionado){
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

//Función para agregar un disco a la lista personal

function agregarDiscoPersonal (disco) {
    const nuevoElemento = document.createElement ('li');
    nuevoElemento.textContent = disco.titulo + ' - ' + disco.artista;
    const listaPersonal = document.getElementById ('lista-personal');
    listaPersonal.appendChild (nuevoElemento);

}


// Asociar el evento onChange del selector de género a la función mostrarDiscosPorGenero
document.getElementById('selector-generos').addEventListener('change', mostrarDiscosPorGenero);

// Mostrar los discos iniciales al cargar la página
mostrarDiscosPorGenero();


