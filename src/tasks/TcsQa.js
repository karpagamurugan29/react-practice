import React from 'react'

const TcsQa = () => {

    const stringReversed = (str) => {
        let tempStr = str?.split('').reverse().join('')
        return (tempStr)
    }

    const FindFactorial = (value) => {
        let result = 1
        for (let i = 1; i <= value; i++) {
            result = result * i
        }
        return (result)
    }

    const FibonacciSeries = (value) => {
        if (value <= 1) {
            return value
        } else {
            return FibonacciSeries(value - 1) + FibonacciSeries(value - 2)
        }
    }

    const PalindromeCheck = (str) => {
        let temp = str.toString()
        let reverseStr = str?.split('')?.reverse().join('').toString()
        if (temp === reverseStr) {
            return true
        } else {
            return false
        }
    }

    const CountingVowels = (char) => {
        let vowels = ['a', 'e', 'i', 'o', 'u']
        let result = []
        for (let chr of char) {
            if (vowels?.includes(chr)) {
                result?.push(chr)
            }
        }
        return (result)
    }

    const AnagramCheck = (val1, val2) => {
        let first = val1?.split('')
        let second = val2?.split('')
        for (let char of first) {
            if (second?.includes(char)) {
                return 'false'
            } else return 'true'
        }
    }

    const FindTheMaximum = (value) => {
        let max = 0
        for (let val of value) {
            if (val >= max) {
                max = val
            }
        }
        return (max)
    }

    const DuplicateElements = (value) => {
        let dupVal = {}
        let result = []
        for (let val of value) {
            dupVal[val] = (dupVal[val] || 0) + 1
        }
        Object.entries(dupVal)?.forEach((el) => {
            if (el[1] > 1) {
                result?.push(parseInt(el[0]))
            }
        })
        return (result)
    }

    const FindSecondLargestNumber = (value) => {
        let large = 0
        let secondLarg = 0
        for (let val of value) {
            if (large < val) {
                secondLarg = large
                large = val
            }
        }
        return (secondLarg)
    }

    const CountCharacterOccurrences = (char) => {
        let occurrences = {}
        for (let val of char) {
            occurrences[val] = (occurrences[val] || 0) + 1
        }
        return (JSON.stringify(occurrences))
    }

    const FindMostFrequentCharacter = (char) => {
        let temp = {}
        let result = ''
        for (let val of char) {
            temp[val] = (temp[val] || 0) + 1
        }
        Object.entries(temp)?.forEach((el) => {
            if (el[1] > 1) {
                result = el[0]
            }
        })
        return (result)
    }


    const RemoveDuplicatesValueArray = (value) => {
        return ([...new Set(value)])
    }

    const FindLongestStringArray = (array) => {
        let temp = ''
        array?.forEach((el) => {
            if (el?.length > temp?.length) {
                temp = el
            }
        })
        return (temp)
    }

    const SumOfEvenOddNumbers = (value) => {
        let addNum = 0
        let evenNum = 0
        for (let i = 0; i < value?.length; i++) {
            if (value[i] % 2 !== 0) {
                addNum += value[i]
            } else {
                evenNum += value[i]
            }
        }
        // console.log({ 'evenSum': evenNum, 'oddSum': addNum })
    }

    const CalculateAllNumbers = (value) => {
        let calcVal = 1
        for (let i = 0; i < value?.length; i++) {
            calcVal *= value[i]
        }
        return (calcVal)
    }

    const RemoveDuplicateStringsArray = (str) => {
        let temp = [...new Set(str)]
        return (temp)
    }

    const SquareEachNumber = (val) => {
        let result = []
        for (let i = 0; i < val?.length; i++) {
            result.push(val[i] * val[i])
        }
        return(result)
    }

    return (
        <div>
            String reversed : {stringReversed("hello")}<br />
            Find the Factorial : {FindFactorial(5)}<br />
            Fibonacci Series : {FibonacciSeries(5)}<br />
            Palindrome Check : {PalindromeCheck("racecar")}<br />
            Counting Vowels :  {CountingVowels("hello")}<br />
            Anagram Check  :  {AnagramCheck("listen", "silent")}<br />
            Find the Maximum :  {FindTheMaximum([1, 5, 3, 9, 2])}<br />
            Duplicate Elements :  {DuplicateElements([1, 2, 3, 2, 4, 5, 1])}<br />
            Find the Second Largest Number  :  {FindSecondLargestNumber([1, 5, 3, 9, 2])}<br />
            Count Character Occurrences   :  {CountCharacterOccurrences("hello")}<br />
            Find the Most Frequent Character : {FindMostFrequentCharacter("hello")}<br />
            Remove Duplicates from an Array : {RemoveDuplicatesValueArray([1, 2, 3, 2, 4, 5, 1])}<br />
            Find the Longest String in an Array : {FindLongestStringArray(["apple", "banana", "pear", "grapefruit"])}<br />
            Sum of Even and Odd Numbers :  {SumOfEvenOddNumbers([1, 2, 3, 4, 5, 6])}<br />
            Calculate All Numbers : {CalculateAllNumbers([1, 2, 3, 4])}<br />
            Remove Duplicate Strings from an Array : {RemoveDuplicateStringsArray(["apple", "banana", "apple", "orange", "banana"])}<br />
            Square Each Number in an Array :  : {SquareEachNumber([1, 2, 3, 4])}<br />
        </div>
    )
}

export default TcsQa
