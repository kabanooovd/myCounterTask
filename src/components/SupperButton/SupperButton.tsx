import React from "react";

type SupperButtonPropsType = {
    buttonName: string
    onClick: () => void
    disabled: boolean
}

export const SupperButton = (props: SupperButtonPropsType) => {

    const SupperNotDisabled: any = {
        textAlign: 'Center',
        backgroundColor: '#0af54c',
        color: '#08081c',
        width: '70px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '1px solid #0af54c',
        //opacity: '0.5'
    }
    const SupperButtonDisabled: any = {
        textAlign: 'Center',
        backgroundColor: '#0af54c',
        color: '#08081c',
        width: '70px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '1px solid #0af54c',
        opacity: '0.5'
    }

    const buttonStyle = props.disabled ? SupperButtonDisabled : SupperNotDisabled

    return (
        <button style={buttonStyle} onClick={props.onClick} disabled={props.disabled}>
            {props.buttonName}
        </button>
    )
}

























// import React from "react";
//
// type SupperButtonPropsType = {
//     buttonName: string
//     onClick: () => void
// }
//
// export const SupperButton = (props: SupperButtonPropsType) => {
//
//     const SupperButtonStyle: any = {
//         textAlign: 'Center',
//         backgroundColor: '#0af54c',
//         color: '#08081c',
//         width: '50px',
//         fontWeight: 'bold',
//         cursor: 'pointer'
//     }
//
//     return (
//         <div style={SupperButtonStyle} onClick={props.onClick}>
//             {props.buttonName}
//         </div>
//     )
// }

