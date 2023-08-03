import React from 'react';

export default function Card({ name, flag, region, population, id }){

    return(
        <div key={id}>
            
            
            <p>Continent: {region}</p>
            <p>Population: {population}</p>

            "e": "1",
            "n": "872378326799",
            "t": "02",
            "saldo": "rai",
            "moneda": "u$s",
            "tipo_letras": "CC"
        </div>
    );
}