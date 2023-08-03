import React from 'react';

export default function Card({ name, flag, region, population, id }){

    return(
        <div className={s.card} key={id}>
            <img className={s.imgstyle} src={flag} alt="1234" />
            <h4>{name}</h4>
            <p className={s.pc}>Continent: {region}</p>
            <p className={s.pp}>Population: {population}</p>

            "e": "1",
            "n": "872378326799",
            "t": "02",
            "saldo": "rai",
            "moneda": "u$s",
            "tipo_letras": "CC"
        </div>
    );
}