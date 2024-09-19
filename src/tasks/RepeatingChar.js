import React from 'react';

const RepeatingChar = () => {

    const FirstNonRepeatingChar = (str) => {
        const tempFrequ = {}

        for (let char of str) {
            tempFrequ[char] = (tempFrequ[char] || 0) + 1
        }

        for (let char of str) {
            if (tempFrequ[char] === 1) {
                return char
            }
        }
        return '_';
    };

    return (
        <div>
            first : {FirstNonRepeatingChar("aabbccddeefg")}<br/>
            second : {FirstNonRepeatingChar("aabbcc")}<br/>
            third : {FirstNonRepeatingChar("abcdabcde")}
        </div>
    )
}

export default RepeatingChar
