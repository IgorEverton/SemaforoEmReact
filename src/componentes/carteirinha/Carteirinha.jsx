import React from "react"
import img from './img/imagem.jpeg'
import logo from './img/logo-fiap-white.png'
import gaucho from './img/AmmxIwWi_400x400.jpg'
import pirlo from './img/pirlo.jpg'
import junin from './img/pernambucano.jpg'
import perfil from './img/perfil.jpg'
import './carteirinha.css'
import { useState } from "react"

export default function Carteirinha(){

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')


    return(
        <>
        <div class="cat1">
            <img src={logo} width="140px" id="logo" />
                <img src={img} width="140px" id="mfoto"/>
                <h2>Igor Everton Sobral Alves</h2>
                <h2>RM: 95214</h2>
                <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMA</h3>
                <h3>1TDSR</h3>
            </div>
            <div class="cat1">
                <img src={gaucho} width="140px"/>
                <h2>Ronaldinho Gaúcho</h2>
                <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMA</h3>
                <h3>1TDSR</h3>
            </div>
            <div class="cat1">
                <img src={pirlo} width="140px"/>
                <h2>Pirlo</h2>
                <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMA</h3>
                <h3>1TDSR</h3>
            </div>
            <div class="cat1">
                <img src={junin} width="140px"/>
                <h2>Juninho Pernambucano</h2>
                <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMA</h3>
                <h3>1TDSR</h3>
            </div>
            <div class="cat1">
                <img src={perfil} width="140px"/>
                
                <h2>NOME: {nome}</h2>
                <input type="text" onCharge={(e)=>setNome(e.target.valeu)}/>
                <h2>CURSO: {curso}</h2>
                <input type="text" onCharge={(e)=>setCurso(e.target.valeu)}/>
            </div>
        </>
    )
}