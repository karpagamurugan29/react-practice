import React, { useEffect, useState } from 'react';

// Custom hook to implement
const useFetch = ({ url }) => {
    const [apiResponse, setApiResponse] = useState({})
    console.log(apiResponse)
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log('data', data))
            .catch(error => console.log('error', error));
    }, [url])

    return {
        data: "",
        error: "",
        loading: ""
    }
};

const UseFetchApi = () => {
    const { data, error, loading } = useFetch('https://dummyjson.com/RESOURCE');

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
};

export default UseFetchApi;
