import React from 'react'

export const JsMay23 = () => {
    const flattenObject = (obj) => {
        let tempObj = obj
        let result = {}
        if (typeof obj === 'object') {

        }
        console.log(typeof obj)

    }

    return (
        <div>
            flattenObject : {
                flattenObject(
                    {
                        user: {
                            name: 'Alice',
                            address: {
                                city: 'Wonderland',
                                zip: 12345
                            }
                        },
                        isActive: true
                    }
                )
            }
        </div>
    )
}
