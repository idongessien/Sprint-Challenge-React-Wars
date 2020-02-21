import React from 'react';
import styled from 'styled-components';

const CharCard = styled.div`
 background: rgb(240, 250, 250);
 width: 22%;
 padding: 1%;
 text-align: left;
 border-radius: 10px;
 margin: 0.5%;
`

const Char = props => {
    return (
        <CharCard>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
            <p>Home World: {props.homeworld}</p>
            <p>Species: {props.species}</p>
            </CharCard>
    );
};

export default Char;

