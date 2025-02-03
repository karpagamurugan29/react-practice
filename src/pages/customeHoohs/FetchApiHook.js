import React, { useEffect, useState } from 'react'


export const FetchApi = async (api) => {
    let data = []
    let error = ''
    let loader = true
    try {
        const result = await fetch(api)
        if (result?.status === 200) {
            const tempData = await result?.json()
            data = tempData?.users
        } else {
            data = []
        }
        loader = false
    } catch (err) {
        error = err
        loader = false
    }
    return { data, error, loader }
}

const FetchApiHook = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [loader, setLoader] = useState(false)
    const fetchUser = async () => {
        setLoader(true)
        const response = await FetchApi('https://dummyjson.com/users')
        if (response) {
            setUser(response?.data)
            setError(response?.error)
            setLoader(response?.loader)
        }
        console.log(response)
    }
    useEffect(() => {
        if (user.length === 0) {
            fetchUser()
        }
    }, [user, error, loader])

    return (
        <div>
            <ol>
                {
                    loader ? <h1>Loading...</h1> :
                        user?.map((el, ind) => (
                            <li key={ind}>{el?.firstName}</li>
                        ))
                }
            </ol>
        </div>
    )
}

export default FetchApiHook
