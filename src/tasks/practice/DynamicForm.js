import React, { useState } from 'react'

export const DynamicForm = () => {
    const [formFields] = useState([
        {
            "type": "text",
            "label": "Name",
            "name": "username",
            "required": true
        },
        {
            "type": "select",
            "label": "Country",
            "name": "country",
            "options": ["India", "USA", "Germany"]
        },
        {
            "type": "checkbox",
            "label": "Accept Terms",
            "name": "terms",
            "required": true
        }
    ]
    )
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({})

    const renderForm = (data) => {
        switch (data?.type) {
            case 'text':
                return (
                    <div key={data?.index} className='mb-2'>
                        <label>{data?.label} {data?.required && <span style={{ color: 's' }}>*</span>}</label><br />
                        <input type={data?.type} name={data?.name} value={formData[data?.name]} onChange={((e) => setFormData((pre) => ({ ...pre, [data?.name]: e?.target?.value })))} /><br />
                        {errors[data?.name] && <span style={{ color: 'red' }}>{errors[data?.name]}</span>}
                    </div >
                )
                break;
            case 'select':
                return (
                    <div key={data?.index} className='mb-2'>
                        <label>{data?.label} {data?.required && <span style={{ color: 's' }}>*</span>}</label><br />
                        <select type={data?.type} name={data?.name} value={formData[data?.name]} onChange={((e) => setFormData((pre) => ({ ...pre, [data?.name]: e?.target?.value })))}><br />
                            <option>Select Country</option>
                            {
                                data?.options?.map((op, opIn) => (
                                    <option key={opIn} value={op}>{op}</option>
                                ))
                            }
                        </select>
                        {errors[data?.name] && <span style={{ color: 'red' }}>{errors[data?.name]}</span>}
                    </div >
                )
                break;
            case 'checkbox':
                return (
                    <div key={data?.index} className='mb-2'>
                        <label>{data?.label} {data?.required && <span style={{ color: 's' }}>*</span>} <input type={data?.type} name={data?.name} checked={formData[data?.name]} onChange={((e) => setFormData((exist) => ({ ...exist, [data?.name]: e.target.checked })))} /></label><br />
                        {errors[data?.name] && <span style={{ color: 'red' }}>{errors[data?.name]}</span>}
                    </div >
                )
                break;

        }
    }

    const checkValidation = (data) => {
        let checj = true
        let error = {}
        formFields?.filter((el) => {
            if (!data[el?.name] && el?.required) {
                error[el?.name] = `${el?.name} is required`
                checj = false
            }
        })
        setErrors(error)
        return checj

    }

    const OnSubmit = () => {
        if (checkValidation(formData)) {
            console.log('result', formData)
        }
    }

    return (
        <div>
            {
                formFields?.map((el, ind) => (
                    renderForm({ ...el, index: ind })
                ))
            }
            <button onClick={OnSubmit}>Submit</button>
        </div>
    )
}
