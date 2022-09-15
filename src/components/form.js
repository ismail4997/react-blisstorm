import React, { Component } from 'react'
import './form.css'

const Form =(props)=>
{
    return (
        <form onSubmit={props.loadWeather}>
            <input
            class="first"
            type="text"
            name="city"
            placeholder='Choose a city'
            />
            <input
            type="text"
            name="country"
            placeholder='Choose a country'
            className='second'
            />
            <button class="button"><span> Get Weather </span></button>

        </form>
    )

}

export default Form;