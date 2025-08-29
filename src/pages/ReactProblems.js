import React
    // , { useEffect, useState } 
    from 'react'



export const ReactProblems = () => {
    const location = window?.location?.pathname
    console.log(location)
    return (
        <div>
            <RenderRoute
                location={location}
            />


            {/* <div>
                <UserProfile
                    userId={1}
                />
            </div> */}
        </div>
    )
}
const RenderRoute = ({ location }) => {
    console.log('location', location)

    const components = [
        {
            tenant: 'tenantA',
            theme: 'red',
            routes: ['/', '/form'],
            features: { showChat: false },
        },
        {
            tenant: 'tenantB',
            theme: 'blue',
            routes: ['/', '/dashboard'],
            features: { showChat: true },
        }
    ]


    const RenderComponent = (data) => {
        const copmData = data?.components
        const copmUrl = data?.route
        switch (copmUrl) {
            case '':
                return (
                    <div>
                        
                    </div>
                )
            default: return null
        }
    }

    return (
        <div>
            {RenderComponent({ components: components, route: location })}
        </div>
    )
}

// const UserProfile = ({ userId }) => {
//     const [user, setUser] = useState({});
//     const [loading, setLoading] = useState(false);

//     const fetchApi = async (userId) => {
//         setLoading(true);
//         const res = await fetch(`/api/users/${userId}`);
//         const data = await res.json();
//         setUser(data);
//         setLoading(false);
//     }

//     useEffect(() => {
//         if (userId) {
//             fetchApi(userId)
//         }
//     }, [userId])

//     return (
//         <div>
//             {loading && <p>Loading...</p>}
//             <h1>{user.name}</h1>
//         </div>
//     );
// };