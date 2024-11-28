import React from 'react'

const StringAndArrayMethod = () => {

    const findLongestWord = (str) => {
        let tempStr = str?.split(' ')
        let result = ''
        let minVal = 1
        for (let char of tempStr) {
            if (char.length > minVal) {
                minVal = char.length
                result = char
            }
        }
        return (result)
    }
    const duplicateNumbersRemove = (ary) => {
        let tempRemove = [...new Set(ary)]
        return (tempRemove)
    }

    const areAnagrams = (str1, str2) => {
        if (str1?.length !== str2?.length) return 'false'
        let sortStr1 = str1?.split('').sort().join('')
        let sortstr2 = str2?.split('').sort().join('')
        if (sortStr1 === sortstr2) {
            return 'true'
        } else return 'false'
    }

    const findIntersection = (arr1, arr2) => {
        let result = []
        let set1 = new Set(arr1)
        for (const num of arr2) {
            if (set1?.has(num)) {
                result.push(num)
            }
        }
        // alternate option
        // let result2 = arr1?.filter((el) => arr2?.includes(el))
        return (result)

    }
    const findMissingNumber = (arr) => {
        let temArr = arr?.sort()
        let missingNum = ''
        for (let i = 1; i <= arr?.length; i++) {
            console.log(temArr[i],i)
            if (temArr[i] !== i) {
                missingNum = i
            }
        }
        console.log(missingNum)
    }

    return (
        <div>
            find Longest Word : {findLongestWord("The quick brown fox jumps over the lazy dog")}<br />
            duplicate numbers remove : {duplicateNumbersRemove([1, 2, 2, 3, 4, 4, 5])}<br />
            are Anagrams : {areAnagrams("listen", "silent")}<br />
            Find Intersection of Two Arrays : {findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])}<br />
            Find the Missing Number : {findMissingNumber([3, 7, 1, 2, 8, 4, 5])}<br />
        </div>
    )
}

export default StringAndArrayMethod
