import React, { createContext } from 'react'
const formContext = createContext({})

const FormContext = () => {

    return (
        <formContext.Provider value={{}}>
            <div>
                <Form />
                <FormButton />
            </div>
        </formContext.Provider>
    )
}

const Form = () => {
    return (
        <form style={{ width: '50%', margin: 'auto' }}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" name='name' />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" placeholder="Phone" name='phone' />
            </div>
        </form>
    )
}

const FormButton = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className="btn btn-primary mt-3" >Submit</button>
        </div>
    )
}
export default FormContext
