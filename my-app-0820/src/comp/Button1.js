import React from 'react'
import style from './Button1.module.css'
export default function Button1({size}) {
    if (size==='big') {
        return <button className={`${style.button} ${style.big}`}>큰 버튼</button>
    } else {
        return <button className={`${style.button} ${style.small}`}>작은 버튼</button>
    }
}
