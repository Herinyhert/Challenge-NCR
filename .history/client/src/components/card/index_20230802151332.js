import React from 'react';

export default function Card({ saldo, tipo_letras, n, id }){

    return(
        <div key={id}>
            
            <p>Saldo de cuenta:{saldo}</p>
            <p>Tipo de cuenta: {tipo_letras === "CC"
                  ? "Cuenta Corriente"
                  : tipo_letras === "CA"
                  ? "Caja de Ahorro"
                  : ""} en {moneda === ""
                  ? "Cuenta Corriente"
                  : tipo_letras === "CA"
                  ? "Caja de Ahorro"
                  : ""}</p>
            <p>Numero de cuenta: {n}</p>

            "e": "1",
            "n": "872378326799",
            "t": "02",
            "saldo": "rai",
            "moneda": "u$s",
            "tipo_letras": "CC"
        </div>
    );
}