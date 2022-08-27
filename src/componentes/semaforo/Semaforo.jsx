import React from "react"
import './semaforo.css'

export default function Semaforo(){


    var i=0

    var cores = {

        'verde':()=>{  
            const g = window.document.getElementById('verde')
            g.style.backgroundColor='green' 
            g.style.color='green' 
        },
        'amarelo':()=>{
            const y =window.document.getElementById('amarelo')
            y.style.backgroundColor='yellow'  
            y.style.color='yellow'  
        },
        'vermelho':()=>{
            const r =window.document.getElementById('vermelho')
            r.style.backgroundColor='red'
            r.style.color= 'red'
        },
        'apagado':()=>{
            const g = window.document.getElementById('verde')
            g.style.backgroundColor='rgb(1, 59, 1)'
            g.style.color='rgb(1, 59, 1)' 
            const y =window.document.getElementById('amarelo')
            y.style.backgroundColor='rgb(48, 48, 1)'
            y.style.color='rgb(48, 48, 1)'
            const r =window.document.getElementById('vermelho')
            r.style.backgroundColor='rgb(76, 2, 2)'
            r.style.color='rgb(76, 2, 2)' 
        }
    }

    var mudaCor = ()=>{
        cores['apagado']()
        if(i===1){
            cores['verde']()        
        }

        else if(i===2){
            cores['amarelo']()   
        }

        else if(i===3){
            cores['vermelho']()
        }

        else{
            i=0  
        }
        
        i++
    }
    

    

    return(
        <div class="semaforo">
            <div class="container">
            <div id="verde"><h2>SIGA</h2></div>
            <div id="amarelo"><h2>ATENÇÃO</h2></div>
            <div id="vermelho"><h2>PARE</h2></div>
            </div>
            <div id="botao">
                <button onClick={mudaCor}>mudar cor</button>
            </div>
    </div>
    )
}