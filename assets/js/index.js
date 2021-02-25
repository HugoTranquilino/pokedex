const pokemon = document.querySelector('#pokemon');
const name_pokemon = document.querySelector('#nombre_pokemon')

function renderPokemon(image) {
    pokemon.setAttribute('src', image)
}

// function info_pokemon(name) {
//     name_pokemon.innerHTML(name)
//     // name_pokemon.setAttribute('value',name)
// }

// fetch('https://pokeapi.co/api/v2/pokemon/rillaboom')
// .then(response => response.json())
// .then(pokemon => {
//     // debugger
//     renderPokemon(pokemon.sprites.front_default)
// })

fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
.then(response => response.json())
.then((data) => {
    // debugger
    let pokemon = data.sprites.front_default;
    let name_pokemon = data.species.name;
    renderPokemon(pokemon)
    // info_pokemon(name_pokemon)
    document.getElementById('nombre_pokemon').innerHTML = name_pokemon;
})