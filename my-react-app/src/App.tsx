import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc: "", // Missing image
  },
];

function App() {
  return (
    <section>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default App;
