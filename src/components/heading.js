import React, { Component } from 'react';
import './heading.css'
const Heading = (props)  =>
{
    return(

        <div>
            <h1 className='h1class'> Welcome to weathery </h1><br>
            </br>
            <h3>
                Time to find out weather updates!
            </h3>
        </div>
    )
}

export default Heading;