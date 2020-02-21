
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Char from './Char'

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
        <div>
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
        </div>
    );
}

export default CharCont;
