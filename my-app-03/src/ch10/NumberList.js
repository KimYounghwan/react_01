import React from "react"

export default function NumberList(props){
    const {numbers} = props

    const listitems = numbers.map( (num,index)=> <li key={index}>{num}</li> )

    return (
        <div>
            {listitems}
        </div>
    )
}