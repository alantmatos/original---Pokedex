import React from 'react';
import { useEffect, useState } from "react"
import PokemonDetails from './PokemonDetails.js';


function App() {

  const [pokedata, setPokedata] = useState([])
  useEffect(() => { fetchData() }, [])


  const fetchData = () => {
    const pokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonPromises = []
    for (let i = 1; i <= 151; i++) { pokemonPromises.push(fetch(pokemonUrl(i)).then(res => res.json())) }
    Promise.all(pokemonPromises)
      .then(pokemons => { setPokedata(pokemons) })
  }

  return (<>
  <h1 className='original-pokedex'>The Original Pokedex</h1>
  <hr></hr>
  <div className='pokedex'>    
    <PokemonDetails pokedata={pokedata} />
  </div></>
  );
}

export default App;

