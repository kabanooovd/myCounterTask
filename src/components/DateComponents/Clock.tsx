import React, {useEffect, useState} from "react";

export const Clock = (props: any) => {

    const [date, setData] = useState(new Date())

    const addZero = (num: number) => num < 10 ? `0${num}` : num

    const HRS = addZero(date.getHours())
    const MIN = addZero(date.getMinutes())
    const SEC = addZero(date.getSeconds())

    const clock = `${HRS}:${MIN}:${SEC}`

    useEffect( () => {
        setInterval( () => {
            setData(new Date())
        }, 1000 )
    } )

    return(
        <div>
            {clock}
        </div>
    )
}