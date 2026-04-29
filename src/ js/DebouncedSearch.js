import React, { useEffect, useState } from 'react'


const Debounce = (search, deley) => {
    const [value, setValue] = useState(undefined)

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(search)
        }, deley)
        return () => clearTimeout(timer)
    }, [deley, search])

    return value
}

export const DebouncedSearch = () => {
    const [search, setSearch] = useState('')

    const debounceSearch = Debounce(search, 500)

    console.log(debounceSearch)

    return (
        <div>
            <input type='text' onChange={((e) => setSearch(e.target.value))} />
        </div>
    )
}


