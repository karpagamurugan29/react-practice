import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const UncontrolledLogin = () => {
    const [error, setErrors] = useState({})
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const CheckValidation = () => {
        let validation = true
        let err = {}
        let mailValue = emailRef.current.value
        let passValue = passwordRef.current.value

        if (!mailValue) {
            err['email'] = 'mail is require'
            validation = false
            const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!reg.test(reg)) {
                err['email'] = 'mail id need to be correct format'
                validation = false
            }
        }
        if (!passValue) {
            err['password'] = 'password is require'
            validation = false
            if (passValue.length > 8) {
                err['password'] = 'password shout  be 8 charector'
                validation = false
            }
        }
        setErrors(err)
        return validation
    }
    const OnSubmitForm = () => {
        if (CheckValidation()) {
            console.log(emailRef.current.value, passwordRef.current.value)
        }
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <input style={{ width: '100%' }} ref={emailRef} type="email" placeholder="Enter email" />
                    {error['email'] && <Form.Text style={{ color: 'red' }}>
                        {error['email']}
                    </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label><br />
                    <input style={{ width: '100%' }} ref={passwordRef} type="password" placeholder="Password" />
                    {error['password'] && <Form.Text style={{ color: 'red' }}>
                        {error['password']}
                    </Form.Text>}
                </Form.Group>

                <Button variant="primary" onClick={OnSubmitForm}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}
