// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// juego del amigo secreto
// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);          // Agregar al array
    input.value = "";             // Limpiar campo
    actualizarLista();            // Actualizar visualmente la lista
    limpiarResultado();           // Limpiar resultado si ya hubo un sorteo
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el arreglo y mostrar los nombres
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para limpiar el resultado del sorteo anterior
function limpiarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar si hay amigos para sortear
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${nombreSorteado}</strong></li>`;
}
