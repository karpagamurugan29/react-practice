import React, { useEffect, useState } from 'react'

export default function SearchInput({ onSearch }) {
    const [searchValue, setSearchValueValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchValue)
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue, onSearch])

    return (
        <div>
            <input value={searchValue} onChange={((e) => setSearchValueValue(e?.target?.value))} />
        </div>
    )
}
