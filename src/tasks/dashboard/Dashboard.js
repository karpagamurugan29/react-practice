import React, { createContext, useReducer, useState } from 'react'
import { Table } from 'react-bootstrap'
import AddEditTaskMdel from './AddEditTaskMdel'


const actions = {
    ADD_TASK_MODEL: 'ADD_TASK_MODEL'
}

const initialState = {
    tasks: { open: false, data: [], type: '' },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions?.ADD_TASK_MODEL:
            return {
                ...state,
                tasks: action?.payload
            }
        default: return state
    }
}


const Dashboard = () => {
    const [state, dispatch] = useReducer(reducer)
    const DashContext = createContext()
    const [taskList, setTaskList] = useState([])

    const OnAddTask = () => {
        dispatch({ type: actions?.ADD_TASK_MODEL, payload: { open: true, data: [], type: 'add' } })
    }

    return (
        <DashContext.Provider value={{ state, dispatch, actions, setTaskList }}>
            <div>
                <button type="button" className="btn btn-primary" onClick={OnAddTask}>Add Task</button>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Create Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
            <AddEditTaskMdel context={DashContext} />
        </DashContext.Provider>
    )
}

export default Dashboard
