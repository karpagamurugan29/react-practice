import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null)
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "purple", "brown", "gray", "black", "white"];
    const ChangeColor = () => {
        const randomColor = Math.floor(Math.random() * colors.length)
        inputRef.current.style.color = colors[randomColor]
    }
    return (
        <div>
            <button onClick={ChangeColor}>click</button>
            <p ref={inputRef} >orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida quam lorem, et luctus lacus tincidunt et.</p>
        </div>
    )
}

export default UseRef
