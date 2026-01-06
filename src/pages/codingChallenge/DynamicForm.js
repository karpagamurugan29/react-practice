import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const DynamicForm = () => {

  const formData = [
    {
      label: 'Name',
      input: 'input',
      inputType: 'text',
      placeholder: 'Enter your name',
      require: true
    },
    {
      label: 'Email',
      input: 'input',
      inputType: 'text',
      placeholder: 'Enter your Email',
      require: true
    },
    {
      label: 'Password',
      input: 'input',
      inputType: 'password',
      placeholder: 'Enter your name',
      require: true,
      maxLength: 6
    }
  ]

  const [data, setData] = useState({
    Name: '',
    Email: '',
    Password: ''
  })

  const [errors, setErrors] = useState({})

  const renderInput = (el, ind) => {
    switch (el.input) {
      case 'input':
        return (
          <Form.Group className="mb-3" key={ind}>
            <Form.Label>{el?.label}</Form.Label><br />
            <input type={el?.inputType} placeholder={el.placeholder} maxLength={el.maxLength || 50} onChange={((e) => {
              let exist = data
              data[el.label] = e.target.value
              setData({ ...exist })
            })} /><br />
            {errors[el.label] && <Form.Text className="text-muted">
              <span style={{ color: 'red' }}>{errors[el.label]}</span>
            </Form.Text>}
          </Form.Group>
        )
      default:
    }
  }

  const validation = () => {
    let error = false
    let errorMes = {}
    Object.entries(data).forEach((a, b) => {
      if (a[1] === '') {
        errorMes[a[0]] = `${a[0]} is required`
      }
      console.log(a, b)
    })
    setErrors(errorMes)
    return error
  }

  const OnSubmit = () => {
    if (validation()) {
      console.log('result', data)
    }
  }

  return (
    <div>
      <Form>

        {
          formData?.map((el, ind) => (
            renderInput(el, ind)
          ))
        }

        <Button variant="primary" onClick={OnSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
