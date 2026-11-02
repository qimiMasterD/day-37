import { useEffect, useState } from "react";

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleEffect = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`HTTP error: ${response.status}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        handleEffect();
    }, [url]);

    return children({ data, loading, error });
}

export default DataFetcher;
