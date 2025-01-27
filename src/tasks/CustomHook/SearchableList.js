import React, { useEffect, useState } from 'react'

const SearchableList = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [filterData, setFilterData] = useState([])
    const fetchData = async (api) => {
        try {
            const result = await fetch(api)
            if (result?.status === 200) {
                const tempData = await result?.json()
                setData(tempData?.users)
            } else {
                alert('User list not fetch')
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (data?.length === 0) {
            fetchData('https://dummyjson.com/users')
        }
    }, [data])


    useEffect(() => {
        setFilterData(searchValue ?
            data?.filter((el) => Object.keys(el)?.some((key) => el[key]?.toString().toLocaleLowerCase().includes(searchValue?.toString().toLocaleLowerCase())))
            :
            data
        )
    }, [data, searchValue])

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                </div>
                <input type="text" className="form-control" placeholder="type search..." onChange={((e) => setSearchValue(e?.target?.value))} />
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">username</th>
                        <th scope="col">role</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterData?.map((el, ind) => (
                            <tr key={ind}>
                                <th scope="row">{ind + 1}</th>
                                <td>{el?.username}</td>
                                <td>{el?.role}</td>
                                <td>{el?.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SearchableList
