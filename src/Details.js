import React from 'react';

function Details({character}) {
  return (
    <div>
      <h3>{character.name || character.aliases[0]}</h3>
      <ul>
        {
          Object.keys(character).map(key => (
            key !== 'name' ? <li>{key}: {character[key]}</li> : null
          ))
        }
      </ul>
    </div>
  );
}

export default Details;
