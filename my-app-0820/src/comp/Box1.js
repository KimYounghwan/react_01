import React from 'react'
import './Box1.css'
export default function Box1({size}) {
    if (size === 'big'){
        return <div className='box big'>큰 박스</div>
    }else {
        return <div className='box small'>작은 박스</div>
    }
}
