import React, { useState } from 'react';

export const DynamicForm = ({ formConfig, onSubmit }) => {
    const [formValues, setFormValues] = useState({});
    const [error, setError] = useState({});

    const OnEnterValue = ({ key, value }) => {
        setFormValues(prev => ({ ...prev, [key]: value }));
    };

    const CheckRequired = (formData) => {
        let isErrors = false;
        let newErrors = {};

        formConfig.forEach(el => {
            if (!formData[el.key] || formData[el.key].trim() === '') {
                newErrors[el.key] = `${el.label} is required`;
                isErrors = true;
            }
        });

        setError(newErrors);
        return !isErrors;
    };

    const onSubmitData = () => {
        if (CheckRequired(formValues)) {
            onSubmit(formValues);
        }
    };

    const renderForm = (field) => (
        <div className="form-group">
            <label>{field.label}</label>
            <input
                type={field.type}
                className="form-control"
                placeholder={`Enter ${field.label}`}
                onChange={(e) => OnEnterValue({ value: e.target.value, key: field.key })}
            />
            {error[field.key] && <small className="text-danger">{error[field.key]}</small>}
        </div>
    );

    return (
        <div className='row'>
            {formConfig.map((field, ind) => (
                <div className='col-md-3 mb-2' key={ind}>
                    {renderForm(field)}
                </div>
            ))}
            <button type="button" className="btn btn-warning" onClick={onSubmitData}>Submit</button>
        </div>
    );
};
