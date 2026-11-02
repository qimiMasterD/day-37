import { useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleData = () => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`HTTP Error: ${response.status}`);
                setData(await response.json());
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    };

    useEffect(handleData, [url]);

    return { data, loading, error, refetch: handleData };
}

export default useApi;
