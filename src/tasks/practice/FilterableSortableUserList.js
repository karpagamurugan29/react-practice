import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export const FilterableSortableUserList = () => {
    const user = [
        { name: "Alice", email: "alice@example.com", role: "Admin" },
        { name: "Bob", email: "bob@example.com", role: "User" },
        { name: "Charlie", email: "charlie@example.com", role: "Manager" }
    ]

    const [data, setData] = useState(user)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (searchValue) {
            data?.forEach((el) => {
                let matches = Object.entries(el)
                Object.entries(el)?.some((val) => {
                    console.log(el, String(val[1]).toLowerCase() === searchValue)
                })
            })
        }
    }, [searchValue])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <select>
                    <option>select</option>
                    {
                        data?.map((el, ind) => (
                            <option key={ind} value={el?.role}>{el?.role}</option>
                        ))
                    }
                </select>
                <input value={searchValue} onChange={((e) => setSearchValue(e.target.value))} placeholder='search...' />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.map((el, ind) => (
                            <tr key={ind}>
                                <td>1</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
