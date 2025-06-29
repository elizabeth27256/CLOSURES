function crearContador (){
    let contador = 0;
    

    return function tomarContador(){
        contador++;
        return contador;

    }
}

const contar = crearContador();
console.log(contar())
console.log(contar.contador)
console.log(contar())
console.log(contar())