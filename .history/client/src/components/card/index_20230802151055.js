import React from 'react';

export default function Card({ saldo, flag, region, population, id }){

    return(
        <div key={id}>
            
            <p>Saldo de cuenta:{saldo}</p>
            <p>Continent: {tipo_letras}</p>
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