import React, { useEffect, useMemo, useState } from 'react'

export const SearchableListComponent = () => {
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([])


    const debounceInput = UseDebounce(searchText, 500)

    console.log(debounceInput)

    useEffect(() => {
        if (data.length === 0) {
            fetch('https://dummyjson.com/users')
                .then((res) => res.json())
                .then((response) => setData(response?.users))
        }
    }, [])

    const filterData = useMemo(() => {
        return debounceInput
            ? data.filter((el) =>
                el.firstName.toString().toLowerCase().includes(debounceInput.toLowerCase())
            )
            : data;
    }, [data, debounceInput]);

    useEffect(() => {
        setSearchResult(filterData);
    }, [filterData]);


    return (
        <div>
            <input value={searchText} onChange={((e) => setSearchText(e.target.value))} />
            <ol>
                {
                    searchResult?.map((el, ind) => (
                        <li key={ind}>{el?.firstName}</li>
                    ))
                }
            </ol>
        </div>
    )
}


const UseDebounce = (search, delay) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(search)
        }, [delay])
        return () => clearTimeout(timer)
    }, [search, delay])

    return value
} 