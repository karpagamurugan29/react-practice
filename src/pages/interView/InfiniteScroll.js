import React, { useCallback, useEffect, useState } from 'react';

// Rename useFetch to fetchData (to avoid React Hook naming issue)
const fetchData = async (api) => {
    try {
        const result = await fetch(api);
        if (result.ok) {
            return await result.json();
        }
    } catch (err) {
        return { error: err.message, users: [] };
    }
    return { users: [] };
};

const InfiniteScroll = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const fetchUsers = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        const response = await fetchData(`https://dummyjson.com/users?limit=10&skip=${page}`);

        if (response?.users?.length > 0) {
            setUsers((prev) => [...prev, ...response.users]);
            setPage((prev) => prev + 10);
        } else {
            setHasMore(false);
        }
        setLoading(false);
    }, [page, loading, hasMore]);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 && hasMore && !loading) {
                fetchUsers();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchUsers, hasMore, loading]);

    return (
        <div>
            <ol>
                {users.map((user, index) => (
                    <li key={index} className="card mb-3 p-2">
                        {index + 1}. {user?.firstName}
                    </li>
                ))}
            </ol>
            {loading && <h3>Loading...</h3>}
            {!hasMore && <h3>No more users</h3>}
        </div>
    );
};

export default InfiniteScroll;
