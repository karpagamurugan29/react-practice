import React, { useCallback, useEffect, useMemo, useState } from 'react'
import FactorialComponent from './FactorialComponent'


export const JsProblems = () => {

    const findFirstDuplicate = (array) => {
        let seen = new Set()
        for (let arr of array) {
            if (seen.has(arr)) {
                return arr
            }
            seen.add(arr)
        }
        return -1
    }

    const groupByParity = (array) => {
        let group = {
            add: [],
            even: []
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                group.add.push(array[i])
            } else {
                group.even.push(array[i])
            }
        }
        let result = JSON.stringify(group)
        return result
    }

    const flattenArray = (array) => {
        let flatArr = []
        for (let i = 0; i < array.length; i++) {
            const value = array[i]
            if (Array.isArray(value)) {
                const nestedArr = flattenArray(value)
                for (let j = 0; j < nestedArr.length; j++) {
                    flatArr.push(nestedArr[j])
                }
            } else {
                flatArr.push(value)
            }
        }
        return flatArr
    }

    const isAnagram = (str1, str2) => {
        if (str1?.length !== str2.length) return 'false'
        const tempObj1 = {}
        const tempObj2 = {}
        for (let char of str1) {
            tempObj1[char] = (tempObj1[char] || 0) + 1
        }
        for (let char of str2) {
            tempObj2[char] = (tempObj2[char] || 0) + 1
        }
        for (let arr in tempObj1) {
            if (tempObj1[arr] !== tempObj2[arr]) {
                return 'false'
            }
        }
        return 'true'
    }

    const createCounter = (e) => {
        let count = 0
        return function () {
            count++
            return count
        }
    }
    const counter = createCounter()

    const debounce = (log, time) => {
        let timer
        return function (...arg) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                log.apply(this, arg)
            }, time)
        }
    }

    const log = () => { }
    const debounceLog = debounce(log, 1000)


    const [searchValue, setSearchValue] = useState('')
    const debounceSearch = useDebounce(searchValue, 500)

    return (
        <div>
            findFirstDuplicate : {findFirstDuplicate([1, 5, 3, 2])}<br />
            groupByParity : {groupByParity([1, 2, 3, 4, 5])}<br />
            flattenArray : {flattenArray([1, [2, [3, 4], 5], 6])}<br />
            isAnagram: {isAnagram("listen", "silent")}<br />
            createCounter : {counter()}<br />
            debounce : {debounceLog()}<br />
            debounced search input : <input onChange={((e) => setSearchValue(e.target.value))} /><br />
            debounceSearch : {debounceSearch}<br />
            useCallback vs Re-Renders : <Parent /><br />
            useMemo Calculation re-render : <FactorialComponent />
            React.memo + Prop Traps : <ParentCard />
        </div>
    )
}


const useDebounce = (query, delay) => {
    const [response, setResponse] = useState('')
    useEffect(() => {
        const timer = setTimeout(() => {
            setResponse(query)
        }, delay)
        return () => clearTimeout(timer)
    }, [query, delay])
    return response
}

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Clicked!');
    }, [])

    const Increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={Increment}>Increment</button>
            <Child onClick={handleClick} />
        </>
    );
};

const Child = React.memo(({ onClick }) => {
    console.log("Child Rendered");
    return <button onClick={onClick}>Child Button</button>;
});



const ParentCard = () => {
    const [likedUsers, setLikedUsers] = useState([]);
    const users = [
        { id: 1, name: "Aditi" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Neha" },
    ];

    const handleLike = useCallback((id) => {
        setLikedUsers((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    }, [])

    const LinkeHandler = useMemo((id) => {
        const map = {}
        users?.forEach((el) => {
            map[id] = () => handleLike(el?.id)
        })
        return map
    }, [users, handleLike])

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} onLike={LinkeHandler[user.id]} />
            ))}
        </div>
    );
};


const UserCard = React.memo(({ user, onLike }) => {
    console.log(`Rendering: ${user.name}`);
    return (
        <div style={{ border: "1px solid gray", margin: "8px", padding: "4px" }}>
            <h3>{user.name}</h3>
            <button onClick={onLike}>Like</button>
        </div>
    );
});
