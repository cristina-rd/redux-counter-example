import React, { Component } from "react"
// AHORA ES UN COMPONENTE PRESENTACIONAL / CONTENIDO
export class Counter extends Component {
    // YA NO NECESITAMOS ESTADOS LOCALES
/*     state = {
        counter: 0
    }

    handleIncrment = () => {
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state, "SUMA")
    }

    handleDecrement = () => {
        this.setState({ counter: this.props.counter - 1 })
        console.log(this.state, "RESTA")
    } */

    render() {
        return (
            <div>
                <div>
                    {/* Contador: <span>{this.state.counter}</span> */}
                    {/* MAPSTATETOPROPS */} 
                    Contador: <span>{this.props.counter}</span> 
                </div>
                {/* MAPDISPATCHTOPROPS */}
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

// TAMBIÉN PODRÍA SER UN COMPONENTE FUNCIONAL, mas sencillo y menos lineas
/* export function Counter({counter, increment, decrement}){
    return (
        <div>
            <div>
                Contador: <span>{counter}</span>
            </div>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
} */