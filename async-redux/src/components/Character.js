import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center; 
margin-top: 1.5rem;
`
const ItemContainer = styled.div`
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
box-shadow: 0 0 10px black;
padding: 1rem 2.2rem;
max-width: 100%;
text-align: center; 
`



const Character = props=> {
    return (
        <CardContainer key = {props.character.id}> 
         <ItemContainer>
          <img src ={props.character.image}/> 
           <h2>{props.character.name}</h2>
           <p> Status: {props.character.status}</p>
           <p> Species: {props.character.species}</p>
           </ItemContainer> 
        </CardContainer>
    )
}


export default Character