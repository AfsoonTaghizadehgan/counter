import '../App.css';
import React from 'react';

export default function Count(props) {

    
    return(
        <div className="count">
            <h1 >{props.count}</h1>  
        </div>
    )
}