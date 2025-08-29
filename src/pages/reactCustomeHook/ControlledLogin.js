import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ControlledLogin = () => {
    const [formValue, setFormValue] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const FormValidation = (values) => {
        let error = {}
        let validation = true
        Object.entries(values)?.forEach(([key, value]) => {
            console.log(key, value)
            if (value === '') {
                error[key] = `${key} is require`
                validation = false
            }
            if (key === 'email' && value) {
                const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!reg.test(value)) {
                    error[key] = `${key} enter currect format`
                    validation = false
                }
            }
            if (key === 'password' && value) {
                if (value.length < 8) {
                    error[key] = `${key} must 8 character`
                    validation = false
                }
            }
        })
        setErrors(error)
        return validation
    }

    const OnSubmitForm = () => {
        if (FormValidation(formValue)) {
            console.log('result', formValue)
        }

    }

    return (
        <div>
            <Form>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <input style={{ width: '100%' }} type="email" placeholder="Enter email" value={formValue['email']} onChange={((e) => setFormValue((exist) => ({ ...exist, email: e.target.value })))} />
                    {errors['email'] && <Form.Text style={{ color: 'red' }}>
                        {errors['email']}
                    </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label><br />
                    <input style={{ width: '100%' }} type="password" placeholder="Password" value={formValue['password']} onChange={((e) => setFormValue((exist) => ({ ...exist, password: e.target.value })))} />
                </Form.Group>
                {errors['password'] && <Form.Text style={{ color: 'red' }}>
                    {errors['password']}
                </Form.Text>}
                <Button variant="primary" onClick={OnSubmitForm}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}
