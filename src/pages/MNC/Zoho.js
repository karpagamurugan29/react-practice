import React from 'react'

export const Zoho = () => {

    const reverseString = (string) => {
        if (typeof string !== 'string') {
            return ''
        }
        const strArray = string.split('')

        return strArray.reduce((accumulator, character) => {
            return character + accumulator
        }, '')
    }

    const secondLargestNumber = (array) => {
        let firstLarge = 0
        let secondLarge = 0

        for (let arr of array) {
            secondLarge = firstLarge
            firstLarge = firstLarge < arr ? arr : firstLarge
        }

        return (secondLarge)

    }

    const moveAllZerosToEnd = (array) => {
        if (!Array.isArray(array)) {
            return 'input must be an array'
        }

        const zeroElement = array.filter((el) => el === 0)
        const noneZeroElement = array.filter((el) => el !== 0)

        return noneZeroElement.concat(zeroElement)

    }

    return (
        <div>
            reverse a string =  {reverseString('karpagamurugan')}<br />
            second largest number =  {secondLargestNumber([12, 45, 7, 89, 45, 99])}
            move all zeros to the end = {moveAllZerosToEnd([0, 5, 0, 3, 12, 0, 7])}
        </div>
    )
}
