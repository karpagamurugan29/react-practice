import React from 'react';

const FindMissingNumbers = () => {


    const FindMissingNumber = (val, target) => {
        let missingNum
        for (let i = 1; i <= target; i++) {
            if (!val?.includes(i)) {
                missingNum = i
                break
            }
        }
        return missingNum
    }

    return (
        <div>
            {FindMissingNumber([1, 2, 4, 5, 6], 6)}
        </div>
    )
}

export default FindMissingNumbers
