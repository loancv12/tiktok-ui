import { useState, useEffect } from 'react';

function useDecounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const hanlder = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(hanlder);
        };
    }, [value]);

    return debouncedValue;
}

export default useDecounce;
