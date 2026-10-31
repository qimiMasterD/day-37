import { forwardRef, useImperativeHandle, useRef } from "react";

function CustomInput(props, ref) {
    const inputRef = useRef(null);
    const value = props.value ?? "";

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus();
            },
            blur: () => {
                inputRef.current.blur();
            },
            getValue: () => value,
        };
    }, [value]);

    return (
        <input
            ref={inputRef}
            type="text"
            value={value}
            label={props.label}
            placeholder={props.placeholder ?? ""}
            onChange={(e) => {
                props.onChange?.(e);
            }}
        />
    );
}

export default forwardRef(CustomInput);
