import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [value, setValue] = useState(0)

    const OddValues = useMemo(() => {
        let termOdd = []
        for (let i = 1; i <= value; i++) {
            if (i % 2 !== 0) {
                termOdd.push(i)
            }
        }
        return termOdd
    }, [value])

    return (
        <div>
            <InputComp
                setValue={setValue}
            />
            <h3>Value : {value}</h3>
            <h3>add Value : <ul>{OddValues?.map((el, ind) => (<li key={ind}>{el}</li>))}</ul></h3>
        </div>
    )
}

export default UseMemo

export const InputComp = ({ setValue }) => {
    return (
        <input type='text' onChange={((e) => setValue(e?.target?.value))} />
    )
}