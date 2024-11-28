import React, { useState } from 'react';

const FormValidation = () => {
    const [error, setError] = useState()
    const OnValidateEmail = (e) => {
        let value = e?.target?.value
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (patt?.test(value)) {
            setError({
                mail: ''
            })
        } else {
            setError({
                mail: 'mail not valid'
            })
        }
    }

    const validatePassword = (e) => {
        let value = e?.target?.value
        const patt = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(patt?.test(value)) {
            setError({
                password: ''
            })
        } else {
            setError({
                password: 'Minimum eight characters, at least one letter and one number'
            })
        }
    }


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" onInput={OnValidateEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                    {error?.mail && <small class="mt-2" style={{ color: 'red' }}>{error?.mail}</small>}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" onInput={validatePassword} id="exampleInputPassword1" placeholder="Password" />
                    {error?.password && <small class="mt-2" style={{ color: 'red' }}>{error?.password}</small>}
                </div>
                <button type="submit" class="mt-5 btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation
