// INICIALIZAMOS ESTADO
const INITIAL_STATE = {
    counter: 0
}

// REDUCER QUE SE EJECUTARÁ AL INICIARSE NUESTRA APP
// O CUANDO EJECUTEMOS UN DISPATCH --> según la acción que reciba ejecutará un caso u otro
export function counterApp (state = INITIAL_STATE, action){
    switch(action.type){
        case "INCREMENT":
            return {
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}