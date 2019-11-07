import React from 'react'
import { connect } from 'react-redux'
import { getCharacter } from '../actions'
import styled from  'styled-components'



// component 

import Character from '../components/Character'

const Button = styled.button`
padding: 1.4rem 1.4rem;
border: none;
border-radius: 5px;
color: #fff;
background: green; 
font-size: 1.2rem;

`


const CharacterList = props => {

    const fetchCharacter = e => {
        e.preventDefault();
        props.getCharacter()
    }

    return (
        <>
        <h1>Rick and Morty Characters</h1>
        {props.characters.map( character => (
            <>
        <Character character ={character} url={character.url}/>
            </> 
        ))}
        <Button onClick ={fetchCharacter} style ={{display: props.isFetching ? 'none': null}}>Show Characters</Button>
        </>
    )
}
const mapStateToProps = state => ({

   characters :state.characters,
   error:  state.error, 
   isFetching: state.isFetching
})
export default connect(mapStateToProps,
    { getCharacter })(CharacterList) 