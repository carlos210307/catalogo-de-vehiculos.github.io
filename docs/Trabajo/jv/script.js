// Definimos el arreglo de productos
const productos = [
    {
        nombre: 'Chevy Silverado 1500 2025',
        descripcion: 'Vehiculo tipo Pickup 4x4 con motor v8',
        precio: 38995,
        imagen: 'img/img1.png' // Cambia las rutas de las imágenes a las correctas
    },
    {
        nombre: 'Chevy Camaro 2025',
        descripcion: 'Vehiculo tipo deportivo con motor v8',
        precio: 46955,
        imagen: 'img/img2.png' // Cambia las rutas de las imágenes a las correctas
    },
    {
        nombre: 'Toyota Hilux 2025',
        descripcion: 'Vehiculo tipo Pickup 4x4 con motor v6',
        precio: 50000,
        imagen: 'img/img3.png' // Cambia las rutas de las imágenes a las correctas
    },
    {
        nombre: 'Jeep Rubicon 2025',
        descripcion: 'Vehiculo tipo 4x4 con motor v6',
        precio: 50900,
        imagen: 'img/img4.png' // Cambia las rutas de las imágenes a las correctas
    }
];

// Función para crear la tarjeta de cada producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    // Agregamos los elementos a la tarjeta
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

// Función para renderizar el catálogo de productos
function renderizarCatalogo() {
    const catalogo = document.getElementById('catalogo');
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

// Cargar el catálogo cuando la página esté lista
window.onload = renderizarCatalogo;
