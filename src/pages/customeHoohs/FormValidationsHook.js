import React, { useState } from 'react'

export const UseForm = (initialstate) => {
    const [values, setValues] = useState(initialstate)
    const [errors, setErrors] = useState({})

    const Validate = (data) => {
        let tempValidate = true
        let tempErrors = { ...errors }
        Object.entries(data)?.forEach(((el) => {
            if (el[1] === '') {
                tempErrors[el[0]] = `${el[0]} is required`
                tempValidate = false
            } else {
                delete tempErrors[el[0]]
            }
        }))
        setErrors(tempErrors)
        return tempValidate
    }

    const handleSubmit = (OnSubmit) => (e) => {
        e?.preventDefault()
        const validatation = Validate(values)
        if (validatation) {
            OnSubmit(values)
        }
    }
    const onChangeValue = (e) => {
        const { name, value } = e?.target
        setValues((exist) => ({ ...exist, [name]: value }))
    }
    return { handleSubmit, onChangeValue, values, errors }
}

const FormValidationsHook = () => {
    const { values, handleSubmit, onChangeValue, errors } = UseForm({ name: '', mail: '', phone: '' })

    const OnSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='container'>
            <form style={{ width: '50%', margin: 'auto' }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" name='name' value={values.name} onChange={onChangeValue} />
                    {errors?.mail && <small className="form-text" style={{ color: 'red' }}>{errors?.name}</small>}
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name='mail' value={values.mail} onChange={onChangeValue} />
                    {errors?.mail && <small className="form-text" style={{ color: 'red' }}>{errors?.mail}</small>}
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Phone" name='phone' value={values.phone} onChange={onChangeValue} />
                    {errors?.phone && <small className="form-text" style={{ color: 'red' }}>{errors?.phone}</small>}
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSubmit(OnSubmit)}>Submit</button>
            </form>
        </div>
    )
}

export default FormValidationsHook
