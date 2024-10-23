

function PokemonCard({pokemon}) {

const imgAvailable = pokemon.imgSrc;

  return (
    imgAvailable ? (
      <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name}/>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    ) : (
      <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    )
  );
}

export default PokemonCard 