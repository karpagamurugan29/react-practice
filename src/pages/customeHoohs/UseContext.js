import React, { createContext, useContext, useState } from 'react'
const fieldDataContext = createContext()

const UseContext = () => {
    const [count, setcount] = useState(0)
    return (
        <fieldDataContext.Provider value={{ count: count, setcount: setcount }}>
            component 1
             <h1>count : {count}</h1>
            <Component2 />
        </fieldDataContext.Provider>
    )
}
export default UseContext

export const Component2 = () => {
    return (
        <div>
            component 2 :
            <Component3 />
        </div>
    )
}
export const Component3 = () => {
    return (
        <div>
            component 3 :
            <Component4 />
        </div>
    )
}

export const Component4 = () => {
    return (
        <div>
            component 4 :
            <Component5 />
        </div>
    )
}
export const Component5 = () => {
    const { count, setcount } = useContext(fieldDataContext)
    console.log(count, setcount)
    return (
        <div>
            component 5
            <button onClick={(() => setcount((pre) => pre + 1))}>add</button>
            <button onClick={(() => setcount((pre) => pre - 1))}>minus</button>
        </div>
    )
}
