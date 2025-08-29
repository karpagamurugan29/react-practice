import React, { useEffect, useState } from 'react'

export const useFetch = (api) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchApi = async () => {
            setLoader(true)
            setError(null)
            try {
                const response = await fetch(api)
                const result = await response.json()
                console.log(result)
                if (response?.status === 200) {
                    setData(result?.products)
                    setLoader(false)
                }
            } catch (err) {
                setError(err)
                setData([])
            }
        }
        if (data.length === 0) {
            fetchApi()
        }
    }, [api, data])

    console.log('data', data, loader, error)
    return { data, loader, error }
}


export const UseFetch = () => {
    const { data, loader, error } = useFetch('https://dummyjson.com/products')
    console.log(data, loader, error)
    return (
        <div className='row'>
            {loader && 'Loading...'}
            {data?.map((el, ind) => (
                <div key={ind} className='col-md-3'>
                    <div className="card">
                        <img style={{ width: '100px' }} src={el?.images[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{el?.title}</h5>
                            <p className="card-text">{el?.availabilityStatus}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
