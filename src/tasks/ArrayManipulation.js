import React from 'react'

const ArrayManipulation = () => {

    const rotateArray = (value, target) => {
        let len = value?.length
        target = target % len
        let fist = value?.slice(len - target)
        let sec = value?.slice(0, len - target)
        return fist.concat(sec)
    }

    return (
        <div>
            {rotateArray([1, 2, 3, 4, 5, 6, 7], 3)}
        </div>
    )
}

export default ArrayManipulation
