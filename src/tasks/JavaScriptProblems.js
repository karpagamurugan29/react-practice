import React from 'react';

const JavaScriptProblems = () => {
    const users = [
        { id: 1, name: "Alice", score: 85 },
        { id: 2, name: "Bob", score: 92 },
        { id: 3, name: "Charlie", score: 88 },
        { id: 4, name: "David", score: 75 }
    ];

    const isPalindrome = (value) => {
        let actualValue = value
        let reverds = value?.split('').reverse()?.join('')
        if (actualValue === reverds) {
            return 'true'
        } else {
            return 'false'
        }
    }

    const fizzBuzz = (val) => {
        const result = []
        for (let i = 1; i <= val; i++) {
            if (i % 15 === 0) {
                result.push('FizzBuzz')
            } else if (i % 5 === 0) {
                result.push('Buzz')
            } else if (i % 3 === 0) {
                result.push('Fizz')
            } else {
                result.push(i.toString())
            }
        }
        return (
            <ul>
                {result.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }

    const maxProfit = (arr) => {
        let minVal = arr[0]
        let maxVal = 0
        for (let i = 1; i < arr?.length; i++) {
            minVal = Math.min(minVal, arr[i])
            const potentialProfit = arr[i] - minVal
            maxVal = Math.max(maxVal, potentialProfit)
        }
        return (maxVal)
    }

    const getTopNUsers = (user, rank) => {
        let alignRank = user?.sort((a, b) => b?.score - a?.score)
        let result = alignRank.slice(0, rank)
        return (
            <div>
                {result.map(user => (
                    <div key={user.id}>
                        {user.name} - {user.score}
                    </div>
                ))}
            </div>
        );
    }

    const groupByParity = (numbers) => {
        let odd = []
        let even = []
        for (let i = 0; i < numbers?.length; i++) {
            if (numbers[i] % 2 !== 0) {
                odd.push(numbers[i])
            } else {
                even?.push(numbers[i])
            }
        }
        return (
            <div>
                add :
                {odd.map(val => (
                    <div key={val}>
                        {val}
                    </div>
                ))}
                even :
                {even.map(val => (
                    <div key={val}>
                        {val}
                    </div>
                ))}
            </div>
        );
    }

    const appearsOnlyOnce = (value) => {
        let temp = []
        let result = ''
        for (let val of value) {
            temp[val] = (temp[val] || 0) + 1
        }
        Object.entries(temp)?.forEach((el) => {
            if (el[0] >= 1) {
                result = el[0]
            } else return result = null
        })
        return (result)
    }

    const removesAllDuplicates = (value) => {
        let temp = [...new Set(value)]
        return (temp)
    }

    const mergeSortedArrays = (arr1, arr2) => {
        let tempVal = arr1?.concat(arr2)
        let align = tempVal?.sort((a, b) => a - b)
        return (align)
    }

    const firstMissingPositiveInteger = (arr) => {
        let arrange = [...new Set(arr)]
        let tempVal = 1
        for (let i = 0; i < arrange?.length; i++) {
            if (arrange[i] === tempVal) {
                tempVal = tempVal + 1
            }
        }
        return (tempVal)
    }

    const isBalancedParentheses = (str) => {
        const stack = []
        const pairs = {
            '(': ')',
            '[': ']',
            '{': ']'
        }
        for (let i = 0; i < str?.length; i++) {
            const char = str[i]
            if (pairs[char]) {
                stack?.push(char);
            } else {
                let topEl = stack?.pop()
                if (pairs[topEl] !== char) {
                    return 'false'
                }
            }
        }
        return (stack?.length === 0 ? 'true' : 'false')
    }

    return (
        <div>
            <div className='result'>
                isPalindrome : {isPalindrome("racecar")} <br />
            </div>
            <div className='result'>
                fizzBuzz : {fizzBuzz(15)}<br />
            </div>
            <div className='result'>
                maxProfit : {maxProfit([7, 1, 5, 3, 6, 4])}<br />
            </div>
            <div className='result'>
                get Top N Users  : {getTopNUsers(users, 2)}<br />
            </div>
            <div className='result'>
                group By odd/even : {groupByParity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}<br />
            </div>
            <div className='result'>
                appears only once : {appearsOnlyOnce([4, 1, 2, 1, 2])}<br />
            </div>
            <div className='result'>
                removes all duplicates : {removesAllDuplicates([1, 2, 2, 3, 4, 3, 5])}<br />
            </div>
            <div className='result'>
                Merge Sorted Arrays : {mergeSortedArrays([1, 3, 5], [2, 4, 6])}<br />
            </div>
            <div className='result'>
                first missing positive integer : {firstMissingPositiveInteger([1, 2, 0])}<br />
            </div>
            <div className='result'>
                is Balanced Parentheses : {isBalancedParentheses("()[]{}")}<br />
            </div>
        </div>
    )
}

export default JavaScriptProblems
