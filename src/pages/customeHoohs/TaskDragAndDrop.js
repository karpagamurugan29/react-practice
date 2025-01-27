import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const TaskDragAndDrop = () => {
    const [taskList, setTaskList] = useState([
        {
            "id": 1,
            "taskName": "Design homepage",
            "assignedTo": "John Doe",
            "status": "In Progress",
            "dueDate": "2025-02-05"
        },
        {
            "id": 2,
            "taskName": "Develop API endpoints",
            "assignedTo": "Jane Smith",
            "status": "Completed",
            "dueDate": "2025-01-20"
        },
        {
            "id": 3,
            "taskName": "Write documentation",
            "assignedTo": "Alice Johnson",
            "status": "Pending",
            "dueDate": "2025-02-15"
        },
        {
            "id": 4,
            "taskName": "Bug fixes in the login system",
            "assignedTo": "Bob Brown",
            "status": "In Progress",
            "dueDate": "2025-01-30"
        },
        {
            "id": 5,
            "taskName": "Set up production server",
            "assignedTo": "Charlie Davis",
            "status": "Pending",
            "dueDate": "2025-02-10"
        },
        {
            "id": 6,
            "taskName": "Review pull requests",
            "assignedTo": "Diana Evans",
            "status": "Completed",
            "dueDate": "2025-01-25"
        },
        {
            "id": 7,
            "taskName": "UI/UX improvements",
            "assignedTo": "Ethan White",
            "status": "In Progress",
            "dueDate": "2025-02-03"
        },
        {
            "id": 8,
            "taskName": "Database optimization",
            "assignedTo": "Fiona Green",
            "status": "Pending",
            "dueDate": "2025-02-12"
        },
        {
            "id": 9,
            "taskName": "Client meeting for project updates",
            "assignedTo": "George Hall",
            "status": "Completed",
            "dueDate": "2025-01-28"
        },
        {
            "id": 10,
            "taskName": "Create project presentation",
            "assignedTo": "Hannah Scott",
            "status": "In Progress",
            "dueDate": "2025-02-08"
        }
    ]
    )
    const [statuses] = useState(["Pending", "In Progress", "Completed"])
    const [dragStartIndex, setDragStartIndex] = useState(null)
    const OnDragstar = (data) => {
        setDragStartIndex(data)
    }
    const OnDragOver = (e) => {
        e?.preventDefault()
    }

    const OnDropTask = (newStatus) => {
        if (dragStartIndex) {
            const updatedTask = taskList?.map((el) => (el?.id === dragStartIndex.id ? { ...el, status: newStatus } : el))
            setTaskList(updatedTask)
            setDragStartIndex(null)
        }
    }

    return (
        <div className='kanban_dash' style={{ display: "flex", gap: "20px" }}>
            {statuses?.map((value, index) => (
                <div className='kanban_card_row'
                    key={index}
                    onDragOver={((e) => OnDragOver(e))}
                    onDrop={((e) => OnDropTask(value))}
                    style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        minHeight: "300px",
                    }}>
                    {
                        taskList?.filter((val) => val?.status === value)
                            .map((el, ind) => (
                                <div
                                    key={ind}
                                >
                                    <div className='kanban_card_inner' key={ind}
                                        draggable
                                        onDragStart={(() => OnDragstar(el))}
                                        style={{ cursor: "grab", marginBottom: "10px" }}
                                    >
                                        <Card>
                                            <Card.Header>{el?.status}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{el?.taskName}</Card.Title>
                                                <Card.Text>
                                                    {el?.status}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            ))}
        </div>
    )
}

export default TaskDragAndDrop
