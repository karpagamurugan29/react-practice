import React from 'react'

export const ProblemSolving = () => {
    const reverseString = (string) => {
        return string?.split('')?.reverse()?.join('')
    }

    const findLongestWord = (string) => {
        let result = ''
        let tempval = string?.split(' ')
        tempval?.forEach(element => {
            if (element.length > result.length) {
                result = element
            }
        });
        return (result)
    }

    const firstNonRepeating = (string) => {
        let tempObj = {}
        let result = ''
        for (let char of string) {
            tempObj[char] = (tempObj[char] || 0) + 1
        }
        Object.entries(tempObj)?.forEach((el) => {
            if (el[1] === 1) {
                result = el[0]
            }
        })
        return (result)
    }

    const areAnagrams = (str1, str2) => {
        if (str1.length !== str2.length) return 'false'
        let obj1 = {}
        let obj2 = {}
        for (let str of str1) {
            obj1[str] = (obj1[str] || 0) + 1
        }
        for (let str of str2) {
            obj2[str] = (obj2[str] || 0) + 1
        }
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                return 'false'
            } else {
                return 'true'
            }
        }
    }

    const fibonacci = (num) => {
        if (num === 0) return 0
        if (num === 1) return 1
        let a = 0
        let b = 1
        for (let i = 2; i <= num; i++) {
            let temp = a + b
            a = b
            b = temp
        }
        return b
    }

    const isValid = (paran) => {
        const stack = []
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        for (let chr of paran) {
            if (map[chr]) {
                stack.push(map[chr])
            } else {
                if (chr !== stack.pop()) {
                    return false
                }
            }
        }

        return stack.length === 0
    }

    const missingNumber = (numbers) => {
        let n = 0
        let result = []
        numbers?.forEach((el) => {
            if (el > n) {
                n = el
            }
        })
        for (let i = 0; i < n; i++) {
            if (!numbers.includes(i)) {
                result.push(i)
            }
        }
        return (result)
    }

    const charCount = (str) => {
        let value = str.split(' ').join('')
        let obj = {}
        for (let chr of value) {
            obj[chr] = (obj[chr] || 0) + 1
        }
        return (obj)
    }

    const capitalizeWords = (str) => {
        if (!str) return false
        return str.split(' ')?.map((el) => { return el.charAt(0).toUpperCase() + el.slice(1) }).join(' ')
    }

    const flatten = (arr) => {
        let temp = []
        const renderLoop = (el) => {
            el?.forEach((val) => {
                if (Array.isArray(val) && val?.length !== 0) {
                    renderLoop(val)
                } else {
                    temp.push(val)
                }
            })
        }
        arr.forEach((el) => {
            if (Array.isArray(el) && el?.length !== 0) {
                renderLoop(el)
            } else {
                temp.push(el)
            }
        })
        return (temp)
    }
    const data = {
        user: {
            name: "Alice",
            details: {
                age: 28,
                location: {
                    city: "New York",
                    zip: 10001
                }
            }
        }
    };

    const findValueByKey = (obj, targetKey) => {
        for (let key in obj) {
            if (key === targetKey) {
                return obj[key]
            }
            if (typeof obj[key] === 'object') {
                const found = findValueByKey(obj[key], targetKey)
                if (found !== undefined) {
                    return found
                }
            }
        }
        return undefined
    }

    return (
        <div>
            Reverse String : {reverseString("hello")}<br />
            Find the Longest Word : {findLongestWord("I love programming")}<br />
            Non-Repeating Character : {firstNonRepeating("aabcc")}<br />
            Anagram Check : {areAnagrams("listen", "silent")}<br />
            Fibonacci Sequence : {fibonacci(0)},{fibonacci(1)},{fibonacci(5)},{fibonacci(7)}<br />
            Valid Parentheses : {JSON.stringify(isValid("(){}"))}<br />
            Find the Missing Number : {missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])}<br />
            Count Characters : {JSON.stringify(charCount("hello world"))}<br />
            Capitalize First Letter : {capitalizeWords("good morning sunshine")}<br />
            Flatten a Nested Array : {flatten([1, [2, [3, [4]]]])}<br />
            Search in Nested Object : {JSON.stringify(findValueByKey(data, 'city'))}<br />
        </div>
    )
}
