const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemon?.name || "Unknown Pokémon"}</h2>
      {pokemon?.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
};

export default PokemonCard;