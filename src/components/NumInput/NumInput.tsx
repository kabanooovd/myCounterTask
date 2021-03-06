import React from "react";

type NumInputPropsType = {
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    step: number
    disabled: boolean
}

export const NumInput = (props: NumInputPropsType) => {

    const NumInputStyle: any = {
        width: '40px',
        backgroundColor: '#08081c',
        color: '#0af54c',
        border: '2px solid #0af54c',
        outline: 'none',
        textAlign: 'Center'
    }

    return (
        <>
            <input type="number"
                   style={NumInputStyle}
                   value={props.value}
                   onChange={props.onChange}
                   step={props.step}
                   disabled={props.disabled}
            />
        </>
    )
}