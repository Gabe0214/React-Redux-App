import React from 'react'
import { connect } from 'react-redux'
import { getCharacter } from '../actions'

// component 

import Character from '../components/Character'

const CharacterList = props => {

    const fetchCharacter = e => {
        e.preventDefault();
        props.getCharacter()
    }

    return (
        <>
        <h1>Rick and Morty Characters</h1>
        {props.characters.map( character => (
        <Character chracter ={character}/> 
        ))}
        </>
    )
}

export CharacterList 