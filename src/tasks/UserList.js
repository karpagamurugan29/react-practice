import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const UserList = () => {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => setData(json))
    }, [])

    useEffect(() => {
        setSearchResult(data?.filter((el) => el?.name.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase())))
    }, [data, searchText])

    return (
        <div>
            <button onClick={(() => setData((exist) => [...exist, { name: '', email: '' }]))}>Add</button>
            <input placeholder='search' value={searchText} onChange={((e) => setSearchText(e?.target?.value))} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mail Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchResult?.map((el, ind) => (
                            <tr key={el?.id}>
                                <td>{el?.id}</td>
                                <td>
                                    <input type='text' value={el?.name} placeholder='Enter name'
                                        onChange={((e) => {
                                            let tempData = data
                                            tempData[ind].name = e?.target?.value
                                            setData(tempData)
                                        })}
                                    />
                                </td>
                                <td>
                                    <input type='text' value={el?.email} placeholder='Enter Email'
                                        onChange={((e) => {
                                            let tempData = data
                                            let empInp = e?.target?.value
                                            if (empInp.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
                                                tempData[ind].email = e?.target?.value
                                            } else {
                                                alert('enter correct format email')
                                            }
                                        })}
                                    />
                                </td>
                                <td><button onClick={(() => setEdit(el?.id))}>Edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default UserList
