import React from "react"
import Semaforo from "./componentes/semaforo/Semaforo"
import Carro from './componentes/carros/Carro'

export default function App(){
    

    const carros = ['Corola', 'Camaro', 'Celta', 'Mustang', 'SuperSport', 'Maverick', 'Opala', 'Kadett', 'Chevette', 'Gol GTI']

    return(
        <div>
            <h1>IGOR EVERTON, RM95214 1TDSR</h1>
        <Semaforo/>
        <Carro
        carroProps = {carros}
        />
        </div>
        
    )
}