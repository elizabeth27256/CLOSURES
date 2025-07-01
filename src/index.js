// server.js
import express from 'express';
import axios from 'axios';
const app = express();
const PORT = 3000;
 
// 🔐 CLOSURE: función que guarda el nombre por defecto del Pokémon
function crearRutaPokemon(nombrePokemon) {
  return async function (req, res) {
    const nombre = req.params.nombre || nombrePokemon;
 
    try {
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const data = respuesta.data;
 
      res.json({
        nombre: data.name,
        altura: data.height,
        peso: data.weight,
        imagen: data.sprites.front_default
      });
 
    } catch (error) {
      res.status(404).json({ error: `No se encontró el Pokémon: ${nombre}` });
    }
  };
}
 
// 🚀 Usamos el closure aquí para crear la ruta con "pikachu" como valor por defecto
app.get('/pokemon/:nombre', crearRutaPokemon('pikachu'));
 
app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});