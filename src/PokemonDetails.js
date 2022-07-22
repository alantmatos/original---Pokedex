import GenerationI from "./GenerationI";

const PokemonDetails = ({ pokedata }) => {

    return (
        <>
            {pokedata.map(pokemon => <GenerationI key={pokemon.id} pokemon={pokemon} />)}
        </>
    );
}

export default PokemonDetails;