const container = document.getElementById("containerPokemon");

// ✅ CLOSURE: función generadora de tarjetas con filtro de peso
function crearRenderPorPeso(pesoMinimo) {
  return function (pokemonData) {
    if (pokemonData.weight > pesoMinimo) {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
<strong>${pokemonData.name.toUpperCase()}</strong>
<p>Peso: ${pokemonData.weight}</p>
<img src="${pokemonData.sprites.front_default}" />
          `;
      container.appendChild(div);
    }
  };
}

const renderSoloPesados = crearRenderPorPeso(200); // ← este valor queda cerrado en el closure

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(res => res.json())
  .then(data => {
    data.results.forEach(p => {
      fetch(p.url)
        .then(res => res.json())
        .then(renderSoloPesados); // ← usamos la función closure
    });
  })
  .catch(error => {
    console.error("Error al obtener Pokémon", error);
  });