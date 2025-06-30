function filtrarPeso(peso) {
  return function pokemon(pokemon) {
    if (pokemon.weight >= peso) {
      console.log(`${pokemon.name} (peso: ${pokemon.weight})`);
    }
  };
}
 
const pokemons = [   
  { name: "pikachu", weight: 60 },
  { name: "charizard", weight: 90 },
  { name: "snorlax", weight: 460 },
  { name: "bulbasaur", weight: 69 }
];

const pesoPokemon = filtrarPeso(60); // Closure con peso mínimo 100
 
pokemons.forEach(pesoPokemon);