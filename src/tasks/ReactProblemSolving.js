import React from 'react';

const ReactProblemSolving = () => {
    const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 30 }
    ];
    const maximumAge = () => {
        let tempAge = []
        let age = 0
        users?.sort((a, b) => a?.name + b?.name)?.forEach((el) => {
            if (el?.age >= age) {
                age = el
                tempAge.push(el)
            }
        })
        return (JSON?.stringify(tempAge))
    }


    const sections = [
        { id: 1, name: "Header", isVisible: true },
        { id: 2, name: "Footer", isVisible: false },
        { id: 3, name: "MainContent", isVisible: true }
    ];
    const RenderVisibleComponents = () => {
        return sections?.map((el) => el?.isVisible && <div key={el.id}>
            {el.name}
        </div>)
    }


    const usersRole = [
        { name: "Alice", roles: ["user", "admin"] },
        { name: "Bob", roles: ["user"] },
        { name: "Charlie", roles: ["user", "moderator"] }
    ];
    const whoHaveAdminRole = () => {
        let adminName = ''
        usersRole?.map((el) => {
            if (el?.roles?.find((val) => val === 'admin')) {
                adminName = el?.name
            }
        })
        return (adminName)
    }


    const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
    const uniqueNumbers = () => {
        let temp = {}
        let uniqueVal = []
        for (let char of numbers) {
            temp[char] = (temp[char] || 0) + 1
        }
        Object.entries(temp)?.forEach((el) => {
            if (el[1] === 1) {
                uniqueVal.push(el[0])
            }
        })
        return (uniqueVal)
    }


    const inputString = "Hello World";
    const countOfEachCharacter = () => {
        let tempStr = inputString?.toLowerCase().split(' ').join('').split('')
        let count = []
        for (let char of tempStr) {
            count[char] = (count[char] || 0) + 1
        }
        // console.log(count)
    }


    const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
    const FlattenNestedArrays = (array) => {
        //this the easy method but i want try different
        // nestedArray?.flat(Infinity)

        let flatedArr = []
        for (let val of array) {
            if (Array.isArray(val)) {
                flatedArr.push(...FlattenNestedArrays(val))
            } else {
                flatedArr.push(val)
            }
        }
        return (flatedArr)
    }


    const log = () => '';
    const debouncedLog = (log, time) => {
        setTimeout(() => (
            log()
        ), time)
    }


    const FetchingData = async (api) => {
        let tempData = []
        let loading = true
        let error = ''
        try {
            const response = await fetch(api)
            // console.log('response', response)
            if (response.ok) {
                let result = await response.json()
                // console.log('ok')
                tempData = result
                loading = false
            } else {
                // console.log('error')
            }

        } catch (err) {
            error = 'catch error'
        }
        // console.log(tempData, loading, error)
        // return (data, loading, error)
    }

    const { data, loading, error } = FetchingData(`https://dummyjson.com/`)


    const FindMissingNumber = (val) => {
        let tempNum = ''
        let missingNum = val?.forEach((el, ind) => {
            console.log(el , ind + 1)
            if (ind + 1 === el) {
             return  ind + 1
            }else return ''
        })

        console.log(tempNum)
    }


    return (
        <div>
            returns the user with the maximum age : {maximumAge()}<br />
            Render the Visible Components : {RenderVisibleComponents()}<br />
            users who have admin role : {whoHaveAdminRole()}<br />
            unique numbers : {uniqueNumbers()}<br />
            count of each character : {countOfEachCharacter()}<br />
            Flatten Nested Arrays : {FlattenNestedArrays(nestedArray)}<br />
            only run after a specified delay period  : {debouncedLog(log, 2000)}<br />
            {
                loading ? <div>Loading</div> : <div> {data?.map((el) => <div>{el?.firstName}</div>)}</div>
            }
            Find the Missing Number : {FindMissingNumber([1, 2, 4, 5])}
        </div>
    )
}

export default ReactProblemSolving
