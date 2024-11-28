import React, { useReducer } from 'react'

const ConterReducer = (state, action) => {
    console.log(state, action)
    switch (action?.type) {
        case 'INCREMENT':
            return (
                { count: state?.count + 1 }
            )
        case 'DECRIMENT':
            return (
                { count: state?.count - 1 }
            )
        case 'RESET':
            return (
                { count: 0 }
            )
        default: return state
    }
}

const UseReduce = () => {
    const [state, dispatch] = useReducer(ConterReducer, { count: 0 })
    return (
        <div>
            <h1>Count : {state?.count}</h1>
            <button onClick={(() => dispatch({ type: 'INCREMENT' }))}>Add</button>
            <button onClick={(() => dispatch({ type: 'DECRIMENT' }))}>minus</button>
            <button onClick={(() => dispatch({ type: 'RESET' }))}>reset</button>
        </div>
    )
}

export default UseReduce
