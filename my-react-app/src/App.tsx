import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";




function App() {
  const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];
  return (
    <section>
      <div>
      <PokemonCard pokemon={pokemonList[1]} />
      </div> 
    </section>
  );
}
export default App;