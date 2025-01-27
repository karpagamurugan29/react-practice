import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
    const [data, setData] = useState([])
    const fetchApi = async (api) => {
        try {
            const result = await fetch(api)
            if (result?.ok) {
                const data = await result.json()
                setData(data?.users)
            } else {
                console.log('user not found')
                setData([])
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (data?.length <= 0) {
            fetchApi('https://dummyjson.com/users')
        }
    }, [data])
    useLayoutEffect(() => {
        if (data > 0) {
            setData([])
        }
    }, [data])
    console.log(data)
    return (
        <div>
            <ol>
                {data?.map((el, ind) => <li key={ind}>{el?.firstName + ' ' + el?.lastName}</li>)}
            </ol>
        </div>
    )
}

export default UseLayoutEffect
