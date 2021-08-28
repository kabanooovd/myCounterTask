import React from "react";

type SupperButtonPropsType = {
    buttonName: string
    onClick: () => void
}

export const SupperButton = (props: SupperButtonPropsType) => {

    const SupperButtonStyle: any = {
        textAlign: 'Center',
        backgroundColor: '#0af54c',
        color: '#08081c',
        width: '50px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none'
    }

    return (
        <div style={SupperButtonStyle} onClick={props.onClick}>
            {props.buttonName}
        </div>
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

