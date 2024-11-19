import React from 'react'

const JavaScriptProblems = () => {
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
        return(maxVal)
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
        </div>
    )
}

export default JavaScriptProblems
