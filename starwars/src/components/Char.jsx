import React from 'react';

const Char = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
            <p>Home World: {props.homeworld}</p>
            <p>Species: {props.species}</p>
        </div>
    );
};

export default Char;

