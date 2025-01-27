import React, { useEffect, useState } from 'react'

const DebouncedInput = ({ onChange, delay, placeholder }) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(value)
        }, delay)
        return () => clearTimeout(timer)
    }, [delay, value, onChange])

    return (
        <div>
            <input value={value} onChange={((e) => setValue(e.target.value))} placeholder={placeholder} />
        </div>
    )
}

export default DebouncedInput
