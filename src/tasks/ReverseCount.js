import React from 'react'

const ReverseCount = () => {
    let count = ['c', 'e', 'a', 'b', 'z', 'k', 'm', 's']
    const reverseString = (count) => {
        return count?.slice().reverse()
    }
    return (
        <div>
            {reverseString(count)}
        </div>
    )
}

export default ReverseCount
