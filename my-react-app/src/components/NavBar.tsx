interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }: NavBarProps) {
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
    <nav>
      {/* Boutons pour naviguer entre les Pokémon */}
      <button type="button" onClick={pokePrecedent} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button type="button" onClick={pokeSuivant} disabled={pokemonIndex === pokemonList.length - 1}>
        Suivant
      </button>
    </nav>
  );
}

export default NavBar;