
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Char from './Char'
import styled from 'styled-components'

const CardContainer = styled.div`
    background: rgba(0,0,0, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 2%;
    margin: 5% auto;
    width: 90%;
`

const CharCont = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results);
            setData(response.data.results);
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });
}, []);

    return (
        <CardContainer>
                { data.map((indiv, id) => (
                    <Char 
                    name={indiv.name}
                    height={indiv.height}
                    birthYear={indiv.birth_year}
                    gender={indiv.gender}
                    homeworld={indiv.homeworld}
                    species={indiv.species}
                    key={id}
                    />
                ))}
                <footer>Copyright &copy; 2020. All Rights Reserved. idongessien</footer>
        </CardContainer>
        
    );
}

export default CharCont;
