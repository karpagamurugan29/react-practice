import React, { useState } from 'react'

const DynamicForm = () => {
    const [error, setError] = useState({})
    const [fields, setFields] = useState([])
    const [formValue, setFormValue] = useState({})
    const [submitedValue, setSubmitedValue] = useState({})
    const [dynamicform, setDynamicform] = useState({
        label: '',
        fieldName: '',
        fieldType: '',
        require: '',
    })
    const OnEnterValue = (value, keyname) => {
        let tempData = { ...dynamicform }
        tempData[keyname] = value
        setDynamicform(tempData)
    }
    const validation = (value) => {
        let validation = true
        Object.entries(value)?.forEach((el) => {
            if (el[1] === '') {
                setError((exist) => ({ ...exist, [el[0]]: `${el[0]} is required` }))
                validation = false
            } else {
                let tempErr = { ...error }
                delete tempErr[el[0]]
                setError(tempErr)
            }
        })
        return validation
    }

    const OnAddField = () => {
        if (validation(dynamicform)) {
            setFields((exist) => [...exist, dynamicform])
            setDynamicform({
                label: '',
                fieldName: '',
                fieldType: '',
                require: '',
            })
        }
    }

    const onEnterFormValue = (e, index, el) => {
        const key = e?.target?.name
        const value = e?.target?.value
        const tempVal = { ...formValue }
        tempVal[key] = value
        setFormValue(tempVal)
    }

    const renderField = (el, ind) => {
        switch (el?.fieldType) {
            case "input":
                return (
                    <div className="form-group col-md-4" key={ind}>
                        <label>{el?.label}</label>
                        <input className="form-control" type={el?.fieldType} name={el?.fieldName} onChange={((e) => onEnterFormValue(e, ind, el))} />
                        {error[el?.fieldName] && <p style={{ marginTop: '5px', color: 'red' }}>{error[el?.fieldName]}</p>}
                    </div>
                )
            case 'select':
                return (
                    <div className="form-group col-md-4" key={ind}>
                        <label>field type</label>
                        <select className='form-control' type={el?.fieldType} name={el?.fieldName} onChange={((e) => onEnterFormValue(e, ind, el))}>
                            <option value=''>Select</option>
                            <option value='input'>input</option>
                            <option value='date'>date</option>
                            <option value='number'>number</option>
                        </select>
                        {error[el?.fieldName] && <p style={{ marginTop: '5px', color: 'red' }}>{error[el?.fieldName]}</p>}
                    </div>
                )
            case 'date':
                return (
                    <div className="form-group col-md-4" key={ind}>
                        <label>{el?.label}</label>
                        <input className="form-control" type={el?.fieldType} name={el?.fieldName} onChange={((e) => onEnterFormValue(e, ind, el))} />
                        {error?.fieldName && <p style={{ marginTop: '5px', color: 'red' }}>{error?.fieldName}</p>}
                    </div>
                )
            case 'number':
                return (
                    <div className="form-group col-md-4" key={ind}>
                        <label>{el?.label}</label>
                        <input className="form-control" type={el?.fieldType} name={el?.fieldName} onChange={((e) => onEnterFormValue(e, ind, el))} />
                        {error?.fieldName && <p style={{ marginTop: '5px', color: 'red' }}>{error?.fieldName}</p>}
                    </div>
                )
            default:
        }
    }

    const OnSubmitForm = () => {
        if (validation(formValue)) {
            setSubmitedValue(formValue)
        }
    }

    return (
        <div className='row'>
            <div className="form-group col-md-3">
                <label>label name</label>
                <input className="form-control" value={dynamicform?.label} onChange={((e) => OnEnterValue(e?.target?.value, 'label'))} />
                {error?.label && <p style={{ marginTop: '5px', color: 'red' }}>{error?.label}</p>}
            </div>
            <div className="form-group col-md-3">
                <label>field name</label>
                <input className="form-control" value={dynamicform?.fieldName} onChange={((e) => OnEnterValue(e?.target?.value, 'fieldName'))} />
                {error?.fieldName && <p style={{ marginTop: '5px', color: 'red' }}>{error?.fieldName}</p>}
            </div>
            <div className="form-group col-md-3">
                <label>field type</label>
                <select className='form-control' value={dynamicform?.fieldType} onChange={((e) => OnEnterValue(e?.target?.value, 'fieldType'))} >
                    <option value=''>Select</option>
                    <option value='input'>input</option>
                    <option value='date'>date</option>
                    <option value='number'>number</option>
                    <option value='password'>password</option>
                </select>
                {error?.fieldType && <p style={{ marginTop: '5px', color: 'red' }}>{error?.fieldType}</p>}
            </div>
            <div className="form-group col-md-3">
                <label>require</label>
                <select className='form-control' value={dynamicform?.require} onChange={((e) => OnEnterValue(e?.target?.value, 'require'))} >
                    <option value=''>Select</option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
                {error?.require && <p style={{ marginTop: '5px', color: 'red' }}>{error?.require}</p>}
            </div>
            <div className="form-group col-md-12 mt-2" style={{ textAlign: 'center' }}>
                <button className="btn btn-primary" onClick={OnAddField}>Add</button>
            </div>
            <div className='row'>
                {fields?.map((el, ind) => (
                    renderField(el, ind)
                ))}
                {
                    fields?.length > 0 &&
                    <div className="form-group col-md-12 mt-2" style={{ textAlign: 'center' }}>
                        <button className="btn btn-primary" onClick={OnSubmitForm}>Submit</button>
                    </div>
                }
            </div>
            <div className='row'>
                {
                    Object.entries(submitedValue)?.map((el, ind) => {
                        const labelvalue = fields?.filter((la) => la?.fieldName === el[0])?.label
                        return (
                            <div key={ind}>
                                <h6>{labelvalue}</h6>
                                <p>{el[1]}</p>
                            </div>
                        )
                    })
                }
                <div className='cal'></div>
            </div>
        </div>
    )
}

export default DynamicForm
