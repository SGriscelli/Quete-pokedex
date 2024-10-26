interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonList: Pokemon[];
  setPokemonIndex: (index: number) => void;
  
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  const handlePokemonClick = (index: number, name: string) => {
    setPokemonIndex(index);
    if (name === "Pikachu") {
      alert("pika pikachu !!!");
    }
  }
  return (
    <nav>
      {}
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name} 
           onClick={() => handlePokemonClick(index, pokemon.name)}
          type="button"
          
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
