function crearNota(nota) {

    function verNota(participacion=0) {
        console.log("Tu nota es de :", nota + participacion);
        
    }
     return verNota;
}
const calificacion = crearNota(12);
const calificacion2 = crearNota(24);
calificacion(3)
calificacion2(20)
calificacion()



