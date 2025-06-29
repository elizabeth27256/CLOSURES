function crearSaludo(primerSaludo){

    return function persona(nombre){
        console.log(primerSaludo + ", " + nombre)
    }
}
const saludo = crearSaludo("Hola")
saludo("Elizabeth")
saludo("Armando")

// const saludo1 = crearSaludo("Hola 3")
saludo (2)
saludo (12)

crearSaludo ("HOLA") ("WQ212")
crearSaludo ("HOLA3") (1)
