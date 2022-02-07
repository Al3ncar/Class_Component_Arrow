//------------Class Component---------------//
import React, {Component} from 'react'

class App extends Component{
    mensagem = (nome) =>{
        return(
            <div>
                <h1>Olá Rapaziada.</h1>
                <p>
                    Usando o {nome}
                </p>
            </div>
        )
    }
    calculo = (number) => {
        return number * 2
    }
  render(){
    return(
        <div>
            <h1>{this.mensagem("Arrow")}</h1>
            <h2>{this.calculo(25)}</h2>
        </div>
    )
  }
}

export default App

