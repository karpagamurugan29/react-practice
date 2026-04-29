import React, { useEffect, useState } from 'react'
import { ReRender } from './ReRender'
import { DebounceSearchCallApi } from './DebounceSearchCallApi'

export const useDebounce = (value, delay) => {
    const [result, setResult] = useState(value || null)
    useEffect(() => {
        let timer = setTimeout(() => {
            setResult(value)
        }, delay)
        return () => clearTimeout(timer)
    }, [value, delay])
    return result
}

export const CoreJavaScript = () => {

    const anagrams = (value1, value2) => {
        let object = {}
        let result = 'true'
        if (value1?.length !== value2?.length) return 'false';
        for (let char of value1) {
            object[char] = (object[char] || 0) + 1
        }
        for (let char of value2) {
            if (!object[char]) {
                return 'false'
            }
            object[char]--;
        }
        return result
    }

    const firstNonRepeatingCharacter = (string) => {
        let obj = {}
        for (let char of string) {
            obj[char] = (obj[char] || 0) + 1
        }

        for (let char of string) {
            if (obj[char] === 1) {
                return char
            }
        }
        return null
    }

    const FlattenNestedArray = (array) => {
        let result = []

        const nestedFlat = (el) => {
            if (Array.isArray(el) && el?.length !== 0) {
                el?.forEach((val) => {
                    nestedFlat(val)
                })
            } else {
                result.push(el)
            }
        }

        array?.map((el) => {
            if (Array.isArray(el) && el?.length !== 0) {
                el?.map((val) => nestedFlat(val))
            } else {
                result.push(el)
            }
        })

        return (result)
    }

    const secondLargestNumber = (array) => {
        let large = 0
        let secondLarge = 0
        for (let arr of array) {
            if (large < arr) {
                secondLarge = large
                large = arr
            }
        }
        return secondLarge
    }



    const [searchValue, setSearchValue] = useState('')
    const debouncedSearch = useDebounce(searchValue, 500)
    console.log(debouncedSearch)


    return (
        <div>
            anagrams : {anagrams("listen", "silent")}<br />
            first non-repeating character : {firstNonRepeatingCharacter("aabccdeff")} <br />
            Flatten a nested array : {FlattenNestedArray([1, [2, [3, 4], 5], 6])}<br />
            second largest number : {secondLargestNumber([10, 5, 8, 20, 15])}<br />
            debounce input : {<input value={searchValue} onChange={((e) => setSearchValue(e.target.value))} />}
            re-rendering unnecessarily : {<ReRender />}<br />
            Debounce Search Call Api : {<DebounceSearchCallApi />}
        </div>
    )
}


