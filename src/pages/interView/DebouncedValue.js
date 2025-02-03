import React, { useEffect, useState } from 'react'

const UseDebounce = (search, time) => {
    const [debounce, setDebounce] = useState('')
    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounce(search)
        }, time)
        return () => clearTimeout(timer)
    }, [search, debounce, time])
    return debounce
}

const UseFetchApi = async (api) => {
    let loader = true
    let error = ''
    let data = []
    try {
        const result = await fetch(api)
        if (result?.status === 200) {
            let tempData = await result?.json()
            data = tempData
        }
    } catch (err) {
        error = err
    }
    loader = false
    return { error, data, loader }
}

const DebouncedValue = () => {
    const [searchText, setSearchText] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({})
    const [users, setUsers] = useState([])
    const debounce = UseDebounce(searchText, 1000)

    useEffect(() => {
        const getUser = async (search) => {
            setLoader(true)
            const searchApi = `https://dummyjson.com/users/search?q=${search}`
            const response = await UseFetchApi(searchApi)
            if (response?.data !== 0) {
                setUsers(response?.data?.users)
                setError('')
                setLoader(false)
            }
        }
        if (debounce) {
            getUser(debounce)
        }
    }, [debounce])

    return (
        <div>
            <div class="form-group">
                <label >Search</label>
                <input class="form-control" placeholder="Enter email" onChange={((e) => setSearchText(e?.target?.value))} />
            </div>
            {
                loader ? <h1>Loading...</h1> :
                    <ol className='mt-3'>
                        {
                            users?.map((el, ind) => (
                                <li key={ind}>{el?.username}</li>
                            ))
                        }
                    </ol>
            }

        </div >
    )
}

export default DebouncedValue
