import React from 'react'
import CharacterDetail from '../Components/CharacterDetail'
import { useParams, useNavigate } from 'react-router-dom'


const Character = () => {
const params = useParams();
const id = params.id;
const [character, setCharacter] = React.useState({})
React.useEffect(() => {
  (async () => {
    let data = await fetch (`https://breakingbadapi.com/api/characters/${id}`).then(
      (res) => res.json()
    );
//console.log(data)
    setCharacter(data);
    
  })();
  
}, []);

return (
  <>
        {/* {character.map((character) => (  */}
        
      <CharacterDetail key={character.char_id} character={character}/>

        {/*  ))}  */}
          
        </>
        
      );
    };


export default Character

//const Character = () => {
  //return (
    //<div>personaje</div>
   /*  <><CharacterDetail/></> */
  //)
//}
