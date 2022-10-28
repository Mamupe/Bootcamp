import React from 'react'
//import { CharacterList } from './CharacterList'

const CharacterDetail = ({ character }) => {
 
    return (
    <>
      <h1>name: {character.name}</h1>
      <p>alias: {character.nickname}</p>
      <p>status: {character.status}</p>
    </>
  )
 
}

export default CharacterDetail