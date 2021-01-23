import React from 'react';

function List({
  characterArray,
  onChoice
}) {
  console.log(characterArray);
  return (
    <section>
    <h1>Character List</h1>
    <ul>
    {
      characterArray.map(c => (
        <li
          key={c.url}
          onClick={() => onChoice(c.url)}
        >
          {c.name || c.aliases[0]}
        </li>
      ))
    }
      </ul>
    </section>
  );
}

export default List;
