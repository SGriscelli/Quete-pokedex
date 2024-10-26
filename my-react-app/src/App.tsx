import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import pokemonList from "./components/PokemonList.tsx";
import NavBar from "./components/NavBar.tsx";
import { useState } from "react";
import { useEffect } from "react";




function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(() => {
    alert("hello pokemon trainer 😊");
  }, []);
  
  return (
    <section>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      
      {/* Appel du composant NavBar avec les props */}
      <NavBar
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />
    </section>
  );
}

export default App;
export { pokemonList };
