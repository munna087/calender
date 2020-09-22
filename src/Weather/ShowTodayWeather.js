import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowTodayWeather = () => {

    const [weather,setWeather] = useState('')

    useEffect ( () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=0c42db62af172a6e0e6b60e9bd4201c0')
        .then( res => {
            console.log(res.data.main.temp)
            let tmp = res.data.main.temp;
            tmp = tmp - 273.15
            setWeather(tmp)
        })
        .catch( err => {
            console.log(err)
        })
    })

    return (
        <div style={{marginTop: '30px',color:'limegreen'}}>
                <h3>Today's Temperature</h3>
                {weather ? <h1>{weather}<sup>&deg;C</sup></h1> : 'hello'}
                <hr/>
        </div>
    )
}

export default ShowTodayWeather
