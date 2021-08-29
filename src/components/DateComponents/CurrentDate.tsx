import React from "react";

export const CurrentDate = () => {

    const date = new Date()
    const addZero = (num: number) => num < 10 ? `0${num}` : num

    const DD = addZero(date.getDate())
    const MM = addZero(date.getMonth() + 1)
    const YY = addZero(date.getFullYear())

    const currentDate = `${DD}/${MM}/${YY}`

    return(
        <div>
            {currentDate}
        </div>
    )
}