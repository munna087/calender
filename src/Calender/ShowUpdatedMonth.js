import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ShowUpdatedMonth = ({month,year,prevMonth,nextMonth}) => {
    return (
        <div style={{textAlign: 'center'}}>
            
            <h1> 
                <span onClick={prevMonth}><ArrowBackIosIcon/></span>
                <span style={{marginLeft:'10px'}}> </span> 
                <span style={{maxwidth:'100px'}}>{month}, {year}</span> 
                <span style={{marginRight:'10px'}}> </span>
                <span onClick={nextMonth}><ArrowForwardIosIcon/></span>
            </h1>
            
        </div>
    )
}

export default ShowUpdatedMonth
