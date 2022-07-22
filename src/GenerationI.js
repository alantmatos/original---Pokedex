import React from "react";
import { useState } from "react";

const GenerationI = ({ pokemon }) => {

    const [img, setImg] = useState(true)
    const imgFront = pokemon.sprites.front_default;
    const imgBack = pokemon.sprites.back_default;

    return (
        <div className="card">
            <img className="card-image" onClick={()=>setImg(!img)} src={img ? imgFront : imgBack} alt="pokemon"></img>
            <h3 className="card-title">{pokemon.name}</h3>
            <h6 className="card-subtitle">ID: {pokemon.id}</h6>
            <h6 className="card-subtitle">Abilities: {pokemon.abilities.map(x => (`| ${x.ability.name}.`))} </h6>
            <h6 className="card-subtitle">Games: {pokemon.game_indices.map(x => (`| ${x.version.name}.`))} </h6>
        </div>
    );
}

export default GenerationI;