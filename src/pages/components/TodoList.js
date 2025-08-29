import React, { useState } from 'react'

export const TodoList = () => {

  const [enterValue, setEnterValue] = useState('')

  console.log('enterValue...', enterValue)

  return (
    <div>
      <input onChange={((element) => setEnterValue(element.target.value))} />
      <button>Add</button>
    </div>
  )
}
