const pokemon = document.querySelector('#pokemon');
const name_pokemon = document.querySelector('#nombre_pokemon')


document.getElementById("buscar").addEventListener("click",
    function buscar() {
        var pokemon_buscado = document.getElementById("buscador").value.toLowerCase();
        
        if(pokemon_buscado != ''){
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_buscado}`)
                .then(response => response.json())
                .then((data) => {
                    // debugger
                    let pokemon = data.sprites.other.dream_world.front_default;
                    let name_pokemon = data.species.name;
                    renderPokemon(pokemon)
                    document.getElementById('nombre_pokemon').innerHTML = name_pokemon;
                })
                // .catch(alert('pokemon no encontrado'));
                .catch(error => console.log(error));
        }else{
            alert('Debes ingresa el nombre del pokemon que deseas buscar')
        }

        // console.log(pokemon_buscado);

    }
);

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

// fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
// .then(response => response.json())
// .then((data) => {
//     // debugger
//     // let pokemon = data.sprites.front_default;
//     let pokemon = data.sprites.other.dream_world.front_default;
//     let name_pokemon = data.species.name;
//     renderPokemon(pokemon)
//     // info_pokemon(name_pokemon)
//     document.getElementById('nombre_pokemon').innerHTML = name_pokemon;
// })