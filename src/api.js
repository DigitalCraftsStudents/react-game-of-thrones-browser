

export async function getCharacterList(page=1) {
  const LIST_URL = 'https://anapioficeandfire.com/api/characters/';
  const resp = await fetch(`${LIST_URL}?page=${page}`);
  return await resp.json();
}

export async function getCharacter(url) {  
  const resp = await fetch(url);
  return await resp.json();  
}

