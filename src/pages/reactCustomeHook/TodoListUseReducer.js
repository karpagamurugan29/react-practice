import React, { useReducer } from 'react'


const initialState = []

function toDoReducer(state, action) {
    switch (action.type) {
        case 'TODO_VALUES': {
            return [
                ...state,
                { 'id': Date(), value: action.payload, status: false }
            ]
        }
    }
}


export const TodoListUseReducer = () => {

    const [values, dispatch] = useReducer(toDoReducer, initialState)
    console.log(values, dispatch)
    return (
        <div>
            <div className='mb-3'>
                <input />
            </div>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Todo</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td><button>Delete</button> <button>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
