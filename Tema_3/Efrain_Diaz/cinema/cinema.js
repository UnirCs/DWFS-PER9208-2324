document.getElementById("busqueda").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Aquí puedes llamar a la función que deseas ejecutar cuando se presiona Enter
        buscar(); // Llama a una función llamada buscar(), por ejemplo
    }
});

function buscar() {
    // Aquí puedes poner el código que quieres que se ejecute al presionar Enter en el campo de búsqueda
    console.log("Se presionó Enter en el campo de búsqueda");
    // Por ejemplo, podrías obtener el valor del campo de búsqueda y realizar una búsqueda con él
    const valorBusqueda = document.getElementById("busqueda").value;
    console.log("Valor de búsqueda:", valorBusqueda);
}