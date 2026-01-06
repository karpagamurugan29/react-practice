import React, { useEffect, useState } from 'react'

export const CounterButton = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 10) {
            setCount(0)
        }
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={((e) => setCount((exist) => exist + 1))}>Clicked X times</button>
        </div>
    )
}
