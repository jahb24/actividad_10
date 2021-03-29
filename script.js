let lista = document.getElementById("lista");

//let valores = ['Jorge Hernandez', 'Ruben Dominguez', 'Axel Rivas'];
let valores = [];
const mostrarValores = () => valores.map(valor => {
    let li = document.createElement("li");
    li.innerHTML = valor;
    lista.appendChild(li);
})

const Agregar = () =>{
    let valor = document.getElementById("valor");
    lista.innerHTML = "";
    valores.push(valor.value);
    //console.log(valores);
    mostrarValores();
    valor.value = "";
}

const Limpiar = () => {
    lista.innerHTML = "";
    valores = [];
}