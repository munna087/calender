import React, { useState } from 'react'
import CardDesignWeek from './CardDesignWeek'
import CardDesignMonth from './CardDesignMonth'
import ShowTodayDate from './ShowTodayDate'
import ShowUpdatedMonth from './ShowUpdatedMonth'
import ShowTodayWeather from '../Weather/ShowTodayWeather'


const MyCalender = () => {

    const [today,setToday] = useState(new Date())
    const [thisMonth,setThisMonth] = useState({
        monthId: today.getMonth(),
        yearId: today.getFullYear()
    })

    const month = [
        {id: 0, name: 'January', days: 31},
        {id: 1, name: 'February', days: 28},
        {id: 2, name: 'March', days: 31},
        {id: 3, name: 'April', days: 30},
        {id: 4, name: 'May', days: 31},
        {id: 5, name: 'June', days: 30},
        {id: 6, name: 'July', days: 31},
        {id: 7, name: 'August', days: 31},
        {id: 8, name: 'Semtember', days: 30},
        {id: 9, name: 'October', days: 31},
        {id: 10, name: 'November', days: 30},
        {id: 11, name: 'December', days: 31}
    ]

    const week = [
        {id: 0, name: 'Sun'},
        {id: 1, name: 'Mon'},
        {id: 2, name: 'Tue'},
        {id: 3, name: 'Wed'},
        {id: 4, name: 'Thu'},
        {id: 5, name: 'Fri'},
        {id: 6, name: 'Sat'}
    ]

    const handlePrevMonth = () => {
        let month = thisMonth.monthId
        let year = thisMonth.yearId
        if(month === 0){
            month = 12
            year = year - 1
        }
        month = month - 1;
        setThisMonth({monthId: month, yearId: year})
    }

    const handleNextMonth = () => {
        let month = thisMonth.monthId
        let year = thisMonth.yearId
        if(month === 11){
            month = -1
            year = year + 1
        }
        month = month + 1;
        setThisMonth({monthId: month, yearId: year})
    }

    //creating an array total days for a month. like for january, thisMonthDays = 31
    let thisMonthDays = new Array(month[thisMonth.monthId].days).fill(0)
    
    //Handling Leapyear
    let leapyear = false;
    let y = thisMonth.yearId;
    if((y % 400) === 0){
        leapyear = true
    }else if((y % 100) === 0){
        leapyear = false
    }else if((y % 4) === 0){
        leapyear = true;
    }
    if(thisMonth.monthId === 1 && leapyear){
        thisMonthDays = new Array(29).fill(0)
    }

    //creating an array for the gap infront of first day of a month
    const thisMonthFirstDay = new Date()
    thisMonthFirstDay.setFullYear(thisMonth.yearId,thisMonth.monthId,1)
    const thisMonthFirstDayStart = new Array(thisMonthFirstDay.getDay()).fill(0)


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='row'>
                        <ShowTodayDate date={today.getDate()} month={month[today.getMonth()].name} year={today.getFullYear()}/>
                    </div>
                    <div className='row'>
                        <ShowTodayWeather />
                    </div>

                </div>

                <div className='col-md-1'>

                </div>

                <div className='col-md-7'>

                    <ShowUpdatedMonth 
                        month={month[thisMonth.monthId].name} 
                        year={thisMonth.yearId} 
                        prevMonth={handlePrevMonth} 
                        nextMonth={handleNextMonth}
                    />

                    <div className='d-flex flex-wrap'>
                        <div className='card-group'>
                            {week.map( weekDay => 
                                <CardDesignWeek 
                                    key={`${thisMonth.yearId}-${thisMonth.monthId + 1}-${weekDay.id+1}`} 
                                    eachDay={weekDay.name}
                                />
                            )}
                        </div>
                    </div>
                    
                    <div className='d-flex flex-wrap'>

                        {thisMonthFirstDayStart.map((value,index) =>{                           
                            return(
                                <div style={{visibility: 'hidden'}} key={`${thisMonth.yearId}-${thisMonth.monthId + 1}-${index+1}`} >
                                    <CardDesignMonth /> 
                                </div>                            
                            )                               
                        })}

                        {thisMonthDays.map((value,index) =>{                           
                            return(
                                <div key={`${thisMonth.yearId}-${thisMonth.monthId + 1}-${index+1}`} >
                                    <CardDesignMonth
                                        eachDay={index+1} 
                                        currentMonth={thisMonth.monthId + 1} 
                                        currentYear={thisMonth.yearId}
                                    />
                                </div>     
                            )                               
                        })}
                    
                    </div>

                </div>

                <div className='col-md-1'>

                </div>


            </div>
        </div>
    )
}

export default MyCalender
