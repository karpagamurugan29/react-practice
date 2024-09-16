import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormHandling = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loader, setLoader] = useState(false);

    const OnSubmitData = async (e) => {
        e.preventDefault();
        setLoader(true)
        if (error.length !== 0) {
            let payload = data
            let result = await fetch('/api/items', payload)
            console.log(result)
            setError([])
            setLoader(false)
            setData(data => [...data, payload])
        }
    };

    const OnEnterValue = (value, type) => {
        if (type === 'mail') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                setError(error.filter((el) => el.type !== 'mail'));
            } else {
                if (!error?.find(val => val?.type === 'mail')) {
                    setError([...error, {
                        type: 'mail',
                        error: 'Invalid email address'
                    }]);
                }
            }
        } else if (type === 'name') {
            if (value) {
                setError(error?.filter((el) => el?.type !== 'name'))
            } else {
                if (!error?.find((el) => el?.type === 'name')) {
                    setError([...error, {
                        type: 'name',
                        error: 'Name is required'
                    }])
                }
            }
        }
    };

    console.log(error, data);

    return (
        <div>
            {
                loader && <div>Loading...</div>
            }
            <Form onSubmit={OnSubmitData}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => OnEnterValue(e.target.value, 'name')}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => OnEnterValue(e.target.value, 'mail')}
                        isInvalid={error.some((err) => err.type === 'mail')}
                    />
                    <Form.Control.Feedback type="invalid">
                        {error.find((err) => err.type === 'mail')?.error}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormHandling;
