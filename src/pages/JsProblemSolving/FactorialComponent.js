import React, { useState, useMemo } from 'react';

const factorial = (n) => {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

const FactorialComponent = () => {
    const [num, setNum] = useState(5);
    const [dark, setDark] = useState(false);
    const [currentState, setCurrentState] = useState(num)

    const themeStyle = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#000',
        padding: '1rem',
        marginTop: '1rem',
    };

    const calculatedFactorial = useMemo(() => {
        if (currentState !== num) {
            const result = factorial(num)
            setCurrentState(num)
            return result
        }
        return factorial(currentState)
    }, [currentState, num, setCurrentState])

    return (
        <div>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))}
            />

            <button onClick={() => setDark((prev) => !prev)}>
                Toggle Theme
            </button>

            <div style={themeStyle}>
                Factorial of {num} is: {calculatedFactorial}
            </div>
        </div>
    );
};

export default FactorialComponent;
