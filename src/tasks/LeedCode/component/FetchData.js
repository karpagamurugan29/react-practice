import { useEffect, useState } from 'react';

const FetchData = (api, page, setData) => {
    const [loader, setLoader] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {
        if (loader || !hasMore) return; // Prevent duplicate calls
        setLoader(true);
        try {
            const response = await fetch(`${api}?limit=30&skip=${page}`);
            const result = await response.json();
            if (result?.users?.length > 0) {
                setData((existingData) => [...existingData, ...result.users]);
                setHasMore(result.users.length === 30); // Check if more data is available
            } else {
                setHasMore(false); // No more data to load
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return { loader, hasMore };
};

export default FetchData;
