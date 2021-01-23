import './App.css';

import { useState } from 'react';

import List from './List';
import Details from './Details';

import {
  getCharacterList,
  getCharacter,
} from './api';


function App() {
  const [characters, setCharacters] = useState([]);
  const [char, setChar] = useState(null);
  const [page, setPage] = useState(1);
  
  async function retrieveCharacters() {
    const charactrsFromApi = await getCharacterList(page);
    setCharacters(charactrsFromApi);
  }

  function prev() {
    setPage(page - 1);
    setCharacters([]);
    setChar(null);
  }
  function next() {
    setPage(page + 1);
    setCharacters([]);
    setChar(null);
  }
  
  async function chooseCharacter(url) {
    const character = await getCharacter(url);
    setChar(character);
  }
  
  return (
    <div className="App">
      { page > 1 ?
               <button onClick={prev}>prev</button>
        :
               <button disabled onClick={prev}>prev</button>
      }
      <button onClick={retrieveCharacters}>
        Get Page {page} of Characters
      </button>    
      <button onClick={next}>next</button>
      { characters.length > 0 &&
        <nav>
          <List
            characterArray={characters}
            onChoice={chooseCharacter}
          />
        </nav>
      }
      { char &&
        <Details character={char} />
      }
    </div>
  );
}

export default App;
