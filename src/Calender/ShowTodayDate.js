import React from 'react'

const ShowTodayDate = ({date,month,year}) => {
    return (
        <div style={{marginTop: '30px',color:'seagreen'}}>
            <h1>{date}</h1>
            <h3>{month}</h3>
            <h3>{year}</h3>
            <hr/>
        </div>
    )
}

export default ShowTodayDate
