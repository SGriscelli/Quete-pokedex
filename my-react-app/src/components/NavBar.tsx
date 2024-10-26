interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonList: Pokemon[];
  setPokemonIndex: (index: number) => void;
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <nav>
      {/* Génère un bouton pour chaque Pokémon */}
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name} 
          onClick={() => setPokemonIndex(index)}
          type="button"
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
