import React from 'react'

const Character = props=> {
    return (
        <div key = {props.character.id}>
           <h2>{props.character.name}</h2>
           <p> Status: {props.character.status}</p>
           <p> Species: {props.character.species}</p>
        </div>
    )
}


export default Character