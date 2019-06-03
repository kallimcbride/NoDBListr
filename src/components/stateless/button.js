import React from 'react'
import './button.css'

export default function Button(props){
    return(
        <button className='button4' onClick={props.func}>
            {props.name}
        </button>
    )
}