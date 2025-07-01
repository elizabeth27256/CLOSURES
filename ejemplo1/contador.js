export function crearContador (contador=0){

    return function tomarContador(){
        contador++;
        return contador;

    }
}

const contar = crearContador();
const contar2 = crearContador(5)
console.log(contar())
console.log(contar.contador)
console.log(contar())
console.log(contar2())
console.log(contar2())
console.log("*******")

function contadorSinclosure(){
    let contador = 1;
    contador++
}
contadorSinclosure()
contadorSinclosure()
contadorSinclosure()

