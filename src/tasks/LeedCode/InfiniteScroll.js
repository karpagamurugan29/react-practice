import React, { useEffect, useState } from 'react';
import FetchData from './component/FetchData';

const InfiniteScroll = () => {
    const [page, setPage] = useState(0); // Tracks the current skip value
    const [data, setData] = useState([]); // Stores the fetched data
    const { loader, hasMore } = FetchData('https://dummyjson.com/users', page, setData);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;

            if (scrollTop + innerHeight >= scrollHeight - 50 && hasMore && !loader) {
                setPage((prevPage) => prevPage + 30); // Increment skip value
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
    }, [loader, hasMore]);

    return (
        <div>
            <h5>Infinite Scroll</h5>
            <ol>
                {data.map((user, index) => (
                    <li key={index} className="mb-2">{user.email}</li>
                ))}
            </ol>
            {loader && <div>Loading...</div>}
            {!hasMore && <div>No more data to load.</div>}
        </div>
    );
};

export default InfiniteScroll;
