// Número de estrellas que queremos mostrar
const numStars = 600;

// Por cada estrella que mostremos
for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div'); // Creamos un div
    star.className = 'star'; // Le asignamos un class
    var xy = getRandomPosition(); // Ejecutamos la función para obtener números aleatorios
    star.style.top = xy[1] + 'px'; // Damos un estilo inline al top
    star.style.left = xy[0] + 'px'; // Damos un estilo inline al left
    document.body.append(star); // Lo agregamos al body
}

// Función que genera números aleatorios para x, y
function getRandomPosition() {
    var x = window.innerWidth; // Ancho de la ventana
    var y = window.innerHeight; // Alto de la ventana
    var randomX = Math.floor(Math.random()*x); // Número al azar basado en el ancho
    var randomY = Math.floor(Math.random()*y); // Número al azar basado en el alto
    return [randomX,randomY]; // Retornamos valores a variable que llama la función (xy)
}

