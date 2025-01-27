import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const DragAndDrop = () => {
    const [users, setUsers] = useState([
        {
            "id": 1,
            "name": "John Doe",
            "phone": "+1234567890",
            "mail": "john.doe@example.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "phone": "+1987654321",
            "mail": "jane.smith@example.com"
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "phone": "+1123456789",
            "mail": "alice.johnson@example.com"
        },
        {
            "id": 4,
            "name": "Bob Brown",
            "phone": "+1223344556",
            "mail": "bob.brown@example.com"
        },
        {
            "id": 5,
            "name": "Charlie Davis",
            "phone": "+1445566778",
            "mail": "charlie.davis@example.com"
        },
        {
            "id": 6,
            "name": "Diana Evans",
            "phone": "+1556677889",
            "mail": "diana.evans@example.com"
        },
        {
            "id": 7,
            "name": "Ethan White",
            "phone": "+1667788990",
            "mail": "ethan.white@example.com"
        },
        {
            "id": 8,
            "name": "Fiona Green",
            "phone": "+1778899001",
            "mail": "fiona.green@example.com"
        },
        {
            "id": 9,
            "name": "George Hall",
            "phone": "+1889900112",
            "mail": "george.hall@example.com"
        },
        {
            "id": 10,
            "name": "Hannah Scott",
            "phone": "+1990011223",
            "mail": "hannah.scott@example.com"
        }
    ])
    const [dragStart, setDragStart] = useState(null)
    const handleDragStart = (index) => {
        setDragStart(index);
    };
    const handleDragOver = (e) => {
        e?.preventDefault()
    }
    const OnDropValue = (dropInd) => {
        if (dragStart !== null) {
            const tempUser = [...users]
            const [removed] = tempUser?.splice(dragStart, 1)
            tempUser?.splice(dropInd, 0, removed)
            setUsers(tempUser)
            console.log(removed, tempUser)
            setDragStart(null)
        }
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((el, ind) => (
                            <tr
                                key={ind}
                                draggable
                                onDragStart={(() => handleDragStart(ind))}
                                onDragOver={((e) => handleDragOver(e))}
                                onDrop={(() => OnDropValue(ind))}
                                style={{ cursor: "move" }}
                            >
                                <td>{el?.id}</td>
                                <td>{el?.name}</td>
                                <td>{el?.phone}</td>
                                <td>{el?.mail}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default DragAndDrop
