import React from "react";

export default function Carro(props){
    return(
        <div>
            <h1>LISTA CARROS</h1>
            <ul>
                <li>Lista Carros: {props.carroProps[0]}</li>
                <li>Lista Carros: {props.carroProps[1]}</li>
                <li>Lista Carros: {props.carroProps[2]}</li>
                <li>Lista Carros: {props.carroProps[3]}</li>
                <li>Lista Carros: {props.carroProps[4]}</li>
                <li>Lista Carros: {props.carroProps[5]}</li>
                <li>Lista Carros: {props.carroProps[6]}</li>
                <li>Lista Carros: {props.carroProps[7]}</li>
                <li>Lista Carros: {props.carroProps[8]}</li>
                <li>Lista Carros: {props.carroProps[9]}</li>

            </ul>
        </div>
    )
}