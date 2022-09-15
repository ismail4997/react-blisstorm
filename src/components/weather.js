import React, { Component } from 'react'
import Forecast from './forecast';
import Form from './form';
import Heading from './heading';

import './weather.css';

const api_key="ff296c0f62203508d107c1059dec1790"; 

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            temperature:"",
            city: "",
            country: "",
            humidity: "",
            pressure: "",
            icon: "",
            description: "",
            error:""
        }
        
        
    }

    getWeather =  async (e) => 
        {
            const city =e.target.elements.city.value;
            const country =e.target.elements.country.value;
            e.preventDefault();
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`);

            const response = await api_call.json();
            console.log(response);
            if(city && country )
            {
                this.setState({
                    temperature:response.main.temp,
                    city:response.name,
                    country:response.sys.country,
                    humidity:response.main.humidity,
                    pressure:response.main.pressure,
                    icon:response.weather[0].icon,
                    description:response.weather[0].description,
                    error:""
                })
            }
            else
            {
                this.setState({
                    error:" You might be missing something... "

                })
            }

        }
    render() { 
        return ( 
            <div className='setting'>
                <div className="container">
                    <div className='Header'>
                        <Heading> </Heading>
                    </div>
                    <div className="form">
                        <Form loadWeather={this.getWeather}/>
                    </div>
                    <div className='weather'>
                        <Forecast
                            temperature={this.state.temperature}
                            city={this.state.city}
                            country={this.state.country}
                            humidity={this.state.humidity}
                            pressure={this.state.pressure}
                            icon={this.state.icon}
                            description={this.state.description}
                            error={this.state.error}
                        >

                        </Forecast>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default Weather;