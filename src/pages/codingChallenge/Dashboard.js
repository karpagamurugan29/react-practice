import React, { useCallback, useEffect, useState } from 'react'


export const CounterButton = ({ count, setCount }) => {
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export const Title = React.memo(() => {
    console.log('render')
    return (
        <div>React Performance Test</div>
    )
})

export const Dashboard = () => {
    const [count, setCount] = useState(0)

    const Increment = useCallback(() => {
        setCount((exist) => exist + 1)
    }, [])


    useEffect(() => {
        if (count > 10) {
            setCount(0)
        }
    }, [count, setCount])


    return (
        <div>
            <button className='btn btn-primary' onClick={Increment}>Clicked X times</button>
            <CounterButton count={count} />
            <Title /><br />

        </div>
    )
}

