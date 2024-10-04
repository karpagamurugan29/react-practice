import React from 'react'

const JsProblemSolving = () => {

    const calculateTotal = (numbers) => {
        return numbers?.reduce((fist, sec) => fist + sec, 0)
    }

    const Reversed = (val) => {
        return val.split('').reverse().join('')
    }

    const FindMaximumNumber = (numbers) => {
        let large = 0
        for (let i = 0; i < numbers?.length; i++) {
            if (numbers[i] > large) {
                return numbers[i]
            }
        }
    }

    const Palindrome = (value) => {
        let tempVal = value?.split('')?.reverse()?.join('')
        if (tempVal?.toLowerCase() === value?.toLowerCase()) {
            return 'its Palindrome'
        } else {
            return 'its Not Palindrome'
        }
    }

    const NonRepeatingChar = (value) => {
        let count = {}
        for (let char of value) {
            count[char] = (count[char] || 0) + 1
        }
        for (let char of value) {
            if (count[char] === 1) {
                return char
            }
        }
    }

    const RepeatingChar = (val) => {
        let count = {}
        let repeat = 0
        for (let char of val) {
            count[char] = (count[char] || 0) + 1
        }
        Object.entries(count)?.forEach((key, ind) => {
            if (key[1] > repeat) {
                repeat = key[0]
            }
        })
        return (repeat)
    }

    const Factorial = (value) => {
        let tempFac = 1
        for (let i = 1; i <= value; i++) {
            tempFac = tempFac * i
        }
        return (tempFac)
    }

    const RemoveDuplicateValue = (arr) => {
        return [...new Set(arr)]

        // both are woring function

        // let tempArr = arr
        // let dupliocate = []
        // let original = []
        // tempArr?.forEach((el) => {
        //     if (original?.some((val) => val === el)) {
        //         dupliocate = [...dupliocate, el]
        //     } else {
        //         original = [...original, el]
        //     }
        // })
        // return (original)
    }

    const AverageNumber = (value) => {
        let total = value?.reduce((a, b) => a + b, 0)
        let avrg = (total / value?.length) || 0
        return (avrg)
    }

    const CountOfEachCharacter = (value) => {
        let tempVAl = value?.split('')
        let count = {}
        tempVAl?.forEach((el, ind) => {
            count[el] = (count[el] || 0) + 1
        })
        // console.log(count)
    }

    const SecondLargestNumber = (values) => {
        let lageNum = values[0]
        let secLageNum = values[1]
        for (let i = 0; i < values?.length; i++) {
            if (values[i] > lageNum) {
                secLageNum = lageNum
                lageNum = values[i]
            } else {
                secLageNum = values[i]
            }
        }
        // console.log(lageNum, secLageNum)

    }

    const SameFrequency = (val1, val2) => {
        let tempFirst = {}
        let tempSec = {}
        let result = false
        for (let char of val1) {
            tempFirst[char] = (tempFirst[char] || 0) + 1
        }

        for (let char of val2) {
            tempSec[char] = (tempSec[char] || 0) + 1
        }

        for (let char of val1) {
            if (val1[char] === val2[char]) {
                result = true
            }
        }
        return result
    }

    const MostFrequentCharacterString = (value) => {
        let freVal = {}
        // const mostFreVal = ''
        for (let char of value) {
            freVal[char] = (freVal[char] || 0) + 1
        }
        Object.entries(freVal)?.forEach((el) => {
            if (el[1] > 1) {
                return (el[0])
            } else return false
        })

    }

    const OnlyUniqueCharacters = (value) => {
        let uniqValue = {}
        for (let char of value) {
            uniqValue[char] = (uniqValue[char] || 0) + 1
        }

        // for (let char of uniqValue) {
        //     if(uniqValue[char] > 1){
        //         console.log(char)
        //     }
        //     console.log(char)
        // }

        Object.entries(uniqValue)?.forEach((el) => {
            if (el[1] > 1) {
                return `${el[0]} has been returned ${el[1]} so its return false`
            } else {
                return `true its contains only unique characters `
            }
        })
    }

    const sumEvenNumbers = (value) => {
        let sum = 0
        for (let i = 0; i < value?.length; i++) {
            if (value[i] % 2 === 0) {
                sum += value[i]
            }
        }
        return sum
    }

    const vowels = (value) => {
        let tempVowels = {}
        let result
        let vowelses = ['a', 'e', 'i', 'o', 'u']
        for (let char of value) {
            if (vowelses.includes(char)) {
                tempVowels[char] = (tempVowels[char] || 0) + 1
            }
        }
        return result
    }

    const ProductOfallNumbers = (value) => {
        let total = 1
        for (let i = 0; i < value?.length; i++) {
            total *= value[i]
        }
        return total
    }

    const RemoveDuplicateString = (value) => {
        return [...new Set(value)]
    }

    const EachNumberSquared = (value) => {
        let tempSquared = []
        for (let i = 0; i < value?.length; i++) {
            tempSquared?.push(value[i] * value[i])
        }
        return (tempSquared)
    }

    const SumOfAllOddNumbers = (value) => {
        let sumValue = []
        for (let i = 0; i < value?.length; i++) {
            if (value[i] % 2 !== 0) {
                sumValue.push(value[i])
            }
        }
        return sumValue.reduce((a, b) => a + b, 0)
    }

    const LongestStringTheArray = (value) => {
        let logString = ''
        for (let chr of value) {
            if (logString?.length < chr?.length) {
                logString = chr
            }
        }
        return (logString)
    }
    const findIntersection = (arr1, arr2) => {
        let result = ''
        arr1?.map((el) => {
            if (arr2.includes(el)) {
                result = el
            }
        })
        return (result)
    }

    const mergeSortedArrays = (arr1, arr2) => {
        return arr1?.concat(arr2)?.sort((a, b) => a - b)
    }

    return (
        <div>
            calculateTotal : {calculateTotal([1, 2, 3, 4, 5])}<br />
            Reversed : {Reversed("hello")}<br />
            FindMaximumNumber : {FindMaximumNumber([10, 5, 8, 3, 9])}<br />
            Palindrome : {Palindrome('Racecar')}<br />
            Non Repeating char: {NonRepeatingChar('swiss')}<br />
            Repeating char: {RepeatingChar('karthik')}<br />
            factorial numbers : {Factorial(5)}<br />
            remove duplicate value : {RemoveDuplicateValue([1, 2, 2, 3, 4, 4, 5])}<br />
            average number : {AverageNumber([1, 2, 3, 4, 5])}<br />
            count of each character : {CountOfEachCharacter('aabbcc')}<br />
            second largest number  : {SecondLargestNumber([10, 20, 4, 45, 99])}<br />
            characters in the same frequency  : {SameFrequency("listen", "silent")}<br />
            most frequent character in the string : {MostFrequentCharacterString('javascript')}<br />
            only unique characters: {OnlyUniqueCharacters('javascript')}<br />
            sum Even Numbers : {sumEvenNumbers([1, 2, 3, 4, 5, 6])}<br />
            vowels : {vowels('javascript')}<br />
            product of all numbers : {ProductOfallNumbers([1, 2, 3, 4])}<br />
            remove duplicate string : {RemoveDuplicateString('banana')}<br />
            each number squared : {EachNumberSquared([1, 2, 3, 4])}<br />
            sum of all odd numbers : {SumOfAllOddNumbers([1, 2, 3, 4, 5])}<br />
            longest string from the array : {LongestStringTheArray(["apple", "banana", "cherry", "blueberry"])}<br />
            present in both arrays : {findIntersection([1, 2, 3, 4], [2, 4, 6, 8])}
            merge Sorted Arrays : {mergeSortedArrays([1, 3, 5], [2, 4, 6])}
        </div>
    )
}

export default JsProblemSolving
