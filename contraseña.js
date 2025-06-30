function crearCajaFuerte(clave) {
  return function(verificarClave) {
    if (verificarClave === clave) {
      return "Acceso concedido";
    } else {
      return "Acceso denegado";
    }
  };
}
 
const caja = crearCajaFuerte("1234");
console.log(caja("1234")); // Acceso denegado
console.log(caja("000")); // Acceso concedido