let frutas = ['Manzanas', 'Mandarinas', 'Sandia', 'Uva'];

function verFrutas() {
    mostrar(frutas.join(', '));
}

function ordenarFrutas() {
    frutas.sort();
    mostrar('Frutas ordenadas: ' + frutas.join(', '));
}

function invertirFrutas() {
    frutas.reverse();
    mostrar('Frutas invertidas: ' + frutas.join(', '));
}

function mostrarLongitud() {
    mostrar('Número de frutas: ' + frutas.length);
}

function insertarFruta() {
    let nuevaFruta = prompt('Ingrese el nombre de la nueva fruta:');
    if (nuevaFruta) {
        frutas.push(nuevaFruta);
        mostrar('Fruta insertada correctamente.');
    } else {
        mostrar('No se ingresó ningún nombre de fruta.');
    }
}

function eliminarFruta() {
    let indice;
    do {
        indice = prompt('Ingrese el índice de la fruta a eliminar:');
    } while (indice !== null && indice !== '' && (isNaN(parseInt(indice)) || parseInt(indice) < 0 || parseInt(indice) >= frutas.length));

    if (indice === null || indice === '' || isNaN(parseInt(indice))) {
        mostrar('No se ingresó un índice válido.');
    } else {
        indice = parseInt(indice);
        let frutaEliminada = frutas.splice(indice, 1);
        mostrar('Fruta eliminada: ' + frutaEliminada);
    }
}
function mostrar(mensaje) {
    document.getElementById('output').textContent = mensaje;
}
