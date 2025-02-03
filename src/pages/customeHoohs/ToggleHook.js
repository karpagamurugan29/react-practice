import React, { useState } from 'react'

const UseDoggle = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(false)
    }
    const doggle = () => {
        setValue(!value)
    }
    return {
        reset, doggle, value
    }
}

const ToggleHook = () => {
    const { reset, doggle, value } = UseDoggle(false)
    return (
        <div>
            <h1>{JSON.stringify(value)}</h1>
            <button className='btn btn-primary' onClick={reset}>reset</button>
            <button className='btn btn-success' onClick={doggle}>toggle</button>
        </div>
    )
}

export default ToggleHook
