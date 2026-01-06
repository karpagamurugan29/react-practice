import { useState } from "react"

const DebouncedInput = () => {
    //Functions
    const [value, setValue] = useState('')

    return (
        // HTML
        <div>
            <input value={value} onChange={((e) => setValue(e.target.value))} />
        </div>
    )
}

export default DebouncedInput