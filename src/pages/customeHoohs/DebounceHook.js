import React, { useEffect, useState } from 'react'


export const useDebounce = (search, time) => {
    const [debounceValue, setDebounceValue] = useState(search)
    console.log(debounceValue)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(search)
        }, time)
        return () => clearTimeout(timer)
    }, [time, debounceValue, search])
    return debounceValue
}

const DebounceHook = () => {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const fetchdata = useDebounce(searchValue, 1000)

    const fetchApi = async (search) => {
        try {
            const result = await fetch(`https://dummyjson.com/products/search?q=${search}`)
            if (result?.status === 200) {
                let tempData = await result.json()
                setSearchResult(tempData?.products)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (fetchdata) {
            fetchApi(fetchdata)
        } else {
            setSearchResult([])
        }
    }, [fetchdata])

    return (
        <div>
            <input value={searchValue} onChange={((e) => setSearchValue(e?.target?.value))} />

            <ol>
                {
                    searchResult?.map((el) => (
                        <li key={el?.stock}>{el?.title}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default DebounceHook
