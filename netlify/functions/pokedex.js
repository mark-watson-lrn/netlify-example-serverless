// note: any node-fetch versions higher than v2.6.1 only support ESM
// so you will get an error message saying you need to use import instead of
// require
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const eventBody = JSON.parse(event.body)
    const POKE_API='https://pokeapi.co/api/v2/pokedex/'+eventBody.region;
    const response = await fetch(POKE_API);
    const data = await response.json();

    console.log( event );

    return {
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries
        })
    }
}
