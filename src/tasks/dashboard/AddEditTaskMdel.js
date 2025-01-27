import React, { memo, useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'

const AddEditTaskMdel = ({ context }) => {
    const { state, dispatch, actions, setTaskList } = useContext(context)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: ''
    })
    const setFormErrors = (newErrors) => {
        setErrors(newErrors);
    };
    const validateForm = (formData) => {
        let validate = true
        let tempError = { ...errors }
        Object.entries(formData).forEach(([key, value]) => {
            if (!value || (typeof value === "string" && value.trim() === "")) {
                tempError[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                validate = false;
            }
        });
        setFormErrors(tempError)
        return validate
    }
    const OnAddTask = (e) => {
        e.preventDefault()
        if (validateForm(formData)) {
            setTaskList((exist) => [...exist, { ...formData, createdDate: new Date() }])
            dispatch({ type: actions?.ADD_TASK_MODEL, payload: false })
            setFormData({ title: '', description: '', status: '' });
        } else {
            dispatch({ type: actions?.ADD_TASK_MODEL, payload: { open: true } })
        }
    }

    const OnEnterValue = (e, key) => {
        setFormData((exist) => ({
            ...exist,
            [key]: e?.target?.value
        }))
    }
    console.log(formData, errors)
    return (
        <div>
            <Modal show={state?.tasks?.open} centered onHide={(() => dispatch({ type: actions?.ADD_TASK_MODEL, payload: false }))}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group mb-2">
                            <label>Title</label>
                            <input type="text" value={formData?.title} onChange={((e) => OnEnterValue(e, 'title'))} className="form-control" placeholder="Enter Title" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Description</label>
                            <input type="text" value={formData?.description} onChange={((e) => OnEnterValue(e, 'description'))} className="form-control" placeholder="Enter Description" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Status</label>
                            <select className="form-control" value={formData?.status} onChange={((e) => OnEnterValue(e, 'status'))}>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button onClick={((e) => OnAddTask(e))}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default memo(AddEditTaskMdel)
