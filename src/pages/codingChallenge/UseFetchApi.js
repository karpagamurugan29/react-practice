import React, { useEffect, useState } from 'react'


const useFetch = (api) => {
    const [data, setData] = useState([])
    const [error, setError] = useState({})
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            setLoader(true)
            try {
                const response = await fetch(api)
                const result = await response.json()
                if (response.status === 200) {
                    setData(result)
                } else {
                    setError(response)
                }
                console.log(response, result)
                setLoader(false)
            } catch (err) {
                setError(err)
                setLoader(false)
            }
        }

        if (data.length === 0) {
            fetchApi()
        }
    }, [api, data])

    return { data, error, loader }

}

export const UseFetchApi = () => {

    const { data, error, loader } = useFetch('https://jsonplaceholder.typicode.com/users')

    console.log(data, error, loader)

    return (
        <div>
            <ol>
                {
                    loader ?
                        <div>Loading...</div> :
                        data?.map((el, ind) => (
                            <li key={ind}>{el?.name}</li>
                        ))
                }
            </ol>
        </div>
    )
}
