import { connect } from "react-redux";
import { Counter } from "../components/Counter"
// devuelve un objeto: recibe state como parametro
//      key: prop
//      value: valor de la prop
const mapStateToProps = state => {
    return { counter: state.counter }
}

// devuelve un objeto: recibe metodo dispatch como parametro
//      key: nombre de la acción --> llegará como prop al componente
//      value: metodo dispatch que envía la acción del tipo indicado
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" })
    }
}

// creamos conexión
const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

// en qué componente queremos crear esa conexion con redux
const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux