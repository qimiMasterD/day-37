import { useState, useCallback } from "react";

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    const setExplicitValue = useCallback((newValue) => {
        setValue(newValue);
    }, []);

    return {
        value,
        toggle,
        setValue: setExplicitValue,
    };
}

export default useToggle;
