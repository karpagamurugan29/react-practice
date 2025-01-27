import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

const ToDoList = () => {
    const [toDoData, setToDoData] = useState([])
    const [addEditModel, setEddEditModel] = useState({ open: false, data: [] })
    const [task, setTask] = useState({ title: '', status: '' })
    const [nextId, setNextId] = useState(1);

    const onAddTask = () => {
        if (!task.title || !task.status) {
            alert(`Please enter ${!task.title ? 'Title,' : ''} ${!task.status ? 'Status' : ''}`.trim());
        } else {
            setToDoData((el) => [...el, { ...task, id: nextId }])
            setEddEditModel({ open: false, type: '' })
            setNextId((id) => id + 1)
        }
    }
    const OnDelete = (id) => {
        setToDoData((pre) => pre.filter((el) => el?.id !== id))
    }

    console.log(task?.title, task?.status, task)
    return (
        <div>
            <Button variant="primary" className='mb-2' onClick={(() => setEddEditModel({ open: true, type: 'add' }))}>Add</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDoData?.map((el, ind) => (
                            <tr key={ind}>
                                <td>{el?.id}</td>
                                <td>{el?.title}</td>
                                <td>{el?.status}</td>
                                <td><Button variant="danger" onClick={() => OnDelete(el?.id)}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal show={addEditModel?.open} onHide={(() => setEddEditModel(false))}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group mb-2">
                        <label>Title</label>
                        <input class="form-control" onChange={((e) => setTask((el) => ({ ...el, title: e?.target?.value })))} />
                    </div>
                    <div class="form-group mb-2">
                        <label>Status</label>
                        <select className='form-control' onChange={((e) => setTask((el) => ({ ...el, status: e?.target?.value })))}>
                            <option value=''>Select status</option>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(() => setEddEditModel(false))}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(() => onAddTask())}>
                        {addEditModel?.type === 'add' ? 'Add' : 'Edit'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ToDoList
