import React, { useState } from 'react'

export const TagInput = ({ maxTags = 5, initialTags = ['React', 'Hooks'] }) => {
    console.log(maxTags, initialTags)
    const [enterValue, setEnterValue] = useState('')
    const [tags, setTags] = useState([])

    console.log('tags', tags)

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === '.') && enterValue) {
            setTags((pre) => [...pre, enterValue])
            setEnterValue('')
        }
    }

    const OnDelete = (ind) => {
        setTags([...tags.filter((_, index) => ind !== index)])
    }

    return (
        <div>
            {
                maxTags !== tags.length && <input value={enterValue} onChange={((e) => setEnterValue(e?.target?.value))} onKeyDown={handleKeyDown} />
            }
            <ol className='mt-3'>
                {
                    tags?.map((el, ind) => (
                        <li key={ind}>{el} <button onClick={(() => OnDelete(ind))} style={{ color: 'red', marginBottom: '20px' }}>X</button></li>
                    ))
                }
            </ol>
        </div>
    )
}
