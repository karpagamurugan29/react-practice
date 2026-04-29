import React, { useEffect, useState } from 'react'

const useDebounce = (searchValue, delay) => {
  const [value, setValue] = useState(searchValue)

  useEffect(() => {
    let timer = setTimeout(() => {
      setValue(searchValue)
      return () => clearTimeout(timer);
    }, delay)
  }, [searchValue, delay])

  return value
}

export const DebounceSearchCallApi = () => {
  const [searchValue, setSearchValue] = useState('')
  const debounceApi = useDebounce(searchValue, 500)

  useEffect(() => {
    if (debounceApi) {
      fetch('https://dummyjson.com/test')
        .then((res) => res.json())
        .then((res) => console.log(res))
    }
  }, [debounceApi])

  console.log(debounceApi)
  return (
    <div>
      <input value={searchValue} onChange={((e) => setSearchValue(e.target.value))} />
    </div>
  )
}
