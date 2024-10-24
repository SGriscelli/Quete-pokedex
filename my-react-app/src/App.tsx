import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokeSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const pokePrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  return (
    <section>
      
     
      
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {/* Boutons pour naviguer entre les Pokémon */}
      <button type="button" onClick={pokePrecedent} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button type="button" onClick={pokeSuivant} disabled={pokemonIndex === pokemonList.length - 1}>
        Suivant
      </button>
    </section>
  );
}

export default App;