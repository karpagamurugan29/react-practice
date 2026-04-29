import React from 'react'

export const MustDoQuestions = () => {

    const longestSubstring = (string) => {
        let set = new Set()
        let left = 0
        let maxSize = 0

        for (let right = 0; right < string.length; right++) {
            while (set.has(string[right])) {
                set.delete(string[left])
                left++
            }
            set.add(string[right]);
            maxSize = Math.max(maxSize, set.size)
        }

        return (maxSize)

    }

    const maxSubArray = (nums) => {
        let curent = nums[0]
        let max = nums[0]

        for (let i = 1; i < nums.length; i++) {
            curent = Math.max(nums[i], curent + nums[i])
            max = Math.max(max, curent)
        }

        return (max)
    }

    const MergeIntervals = (arrays) => {
        arrays.sort((a, b) => a[0] - b[0])

        const result = [[arrays[0]]]

        for (let i = 1; i < arrays.length; i++) {
            let lastIndex = result[result.length - 1]
            let currentIndex = arrays[i]

            if (currentIndex[0] <= lastIndex[1]) {
                result[1] = Math.max(lastIndex[1], currentIndex[1])
            } else {
                result.push(currentIndex)
            }
        }

        return (result)
    }

    const FindDuplicateNumber = (array) => {
        if (array.length === 0) return;
        let obj = {}
        for (let arr of array) {
            obj[arr] = (obj[arr] || 0) + 1
        }
        let result = null
        Object.entries(obj).forEach((el) => {
            if (el[1] > 1) {
                result = el[1]
            }
        })
        return(result)
    }

    return (
        <div>
            longest substring without repeating characters : {longestSubstring("abcabcbb")}<br />
            maxSubArray : {maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])} <br />
            Merge Intervals : {MergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])}<br />
            Find Duplicate Number : {FindDuplicateNumber([1, 3, 4, 2, 2])}
        </div>
    )
}
