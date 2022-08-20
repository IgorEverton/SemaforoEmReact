import React from "react"
import { useState } from "react"
import './semaforo.css'

export default function Semaforo(){
    
    
    const [mudarSema1, setMudarSema1] = useState()
    const [mudarSema2, setMudarSema2] = useState()
    const [mudarSema3, setMudarSema3] = useState()
    
    

    return(
        <div>
        <h2>SEMAFORO: <p class="sema1">{mudarSema1}</p> </h2>
        <button onClick={()=> setMudarSema1("VERDE")}>MUDAR SEMAFORO</button>
        <h2>SEMAFORO: <p class="sema2">{mudarSema2}</p></h2>
        <button onClick={()=> setMudarSema2("AMARELO")}>MUDAR SEMAFORO</button>
        <h2>SEMAFORO: <p class="sema3">{mudarSema3}</p></h2>
        <button onClick={()=> setMudarSema3("VERMELHOR")}>MUDAR SEMAFORO</button>
       
    </div>
    )
}