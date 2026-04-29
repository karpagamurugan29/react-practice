import React, { memo, useCallback, useState } from 'react'

export const ReRender = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((exist) => exist + 1)
    }, [])

    return (
        <div>
            {count}
            <Child onClick={handleClick} />
        </div>
    )
}

const Child = memo(({ onClick }) => {
    return (
        <button onClick={onClick}>Click</button>
    )
})