import React, { Component } from 'react';

import './forecast.css'
const Forecast = (props ) =>
{
    return(
        <div className="container">

            <div class="weather">
                {props.country && props.city && <p> Location: {props.city},{props.country}</p>}
                {props.temperature && <p> Temperature: {props.temperature}</p>}
                {props.humidity && <p> Humidity: {props.humidity}</p>}
                {props.pressure && <p> Pressure: {props.pressure}</p>}


            </div>

            <div class="conditions">
                {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}.png`}  class='image' alt ='weather' />}

                {props.description && <p> Conditions: {props.description}</p>}
                {props.error && <p>  {props.error}</p>}
            </div>    
           
        </div>
        
    )
}

export default Forecast;