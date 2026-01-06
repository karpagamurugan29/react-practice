import React from "react";

const CodingTest = () => {
    const reverseString = (str) => {
        let result = ''

        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i]
        }

        return result
    }

    const findMax = (arr) => {
        if (arr.length === 0) return null;
        let result = arr[0]
        for (let value of arr) {
            result = result <= value ? value : result

        }
        return (result)
    }

    const charCount = (string) => {
        let obj = {}
        for (let str of string) {
            obj[str] = (obj[str] || 0) + 1
        }
        return (JSON.stringify(obj))
    }

    const removeDuplicates = (array) => {
        if (array.length === 0) return null;
        let filterArr = array.reduce((acc, current) => {
            if (!acc.includes(current)) {
                acc.push(current)
            }
            return acc
        }, [])
        return (JSON.stringify(filterArr))
    }


    const secondLargest = (array) => {
        let large = 0
        let secLarge = 0

        for (let arr of array) {
            if (large < arr) {
                secLarge = large
                large = arr
            }
        }
        return secLarge
    }

    const isPalindrome = (str) => {
        let result = false
        let original = str.toLowerCase()
        let rev = str.split('').reverse().join('').toLowerCase()
        return original === rev
    }

    const moveZeros = (arr) => {
        let zeros = []
        let values = []
        for (let value of arr) {
            if (value === 0) {
                zeros.push(value)
            } else {
                values.push(value)
            }
        }
        return JSON.stringify(values.concat(zeros))
    }

    const users = [
        { name: "A", role: "admin" },
        { name: "B", role: "user" },
        { name: "C", role: "admin" }
    ];

    const GroupObjects = (array) => {
        let group = {}

        for (let arr of array) {
            if (!group[arr.role]) {
                group[arr.role] = []
            }
            group[arr.role].push(arr)
        }

        return (JSON.stringify(group))
    }

    const flattenArray = (arr) => {
        let flatArr = []
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i]
            if (Array.isArray(value)) {
                const nestedArr = flattenArray(value)
                flatArr.push(...nestedArr)
            } else {
                flatArr.push(value)
            }
        }
        return (flatArr)
    }

    const firstUniqueChar = (string) => {
        let obj = {}

        for (let chr of string) {
            obj[chr] = (obj[chr] || 0) + 1
        }
        let filVal = Object.entries(obj).filter((el) => el[1] === 1)
        return(filVal[0][0])

    }

    return (
        <div>
            reverseString = {reverseString("hello")}<br />
            Find the largest number = {findMax([3, 7, 2, 9, 4])}<br />
            Count character = {charCount("aabbc")}<br />
            Remove Duplicates = {removeDuplicates([1, 2, 2, 3, 4, 4, 5])}<br />
            Second largest number {secondLargest([10, 5, 20, 20, 8])}<br />
            string is a palindrome {isPalindrome("hello")}<br />
            Move all zeros to the end {moveZeros([0, 1, 0, 3, 12])}<br />
            Group objects by a property {GroupObjects(users)}<br />
            Flatten a nested array {flattenArray([1, [2, [3, 4], 5], 6])}<br />
            Find the first non-repeating character {firstUniqueChar("aabbcdd")}<br />
        </div>
    )
}

export default CodingTest