import React from "react"
import { CharacCard } from "./CharacCard"

export const CharacterList = () => {
    const [characterList, setCharacterList] = React.useState([]);
    React.useEffect(() => {
        (async () => {
          let data = await fetch (`https://breakingbadapi.com/api/characters`).then(
            (res) => res.json()
          );
    /* console.log(data) */
          setCharacterList(data);
        })();
      }, []);

      return (
        <>
          {characterList.map((character) => (
            <CharacCard key={character.char_id} character={character}/> 
         
            
         
          ))}
          
        </>
        
      );
    };

    