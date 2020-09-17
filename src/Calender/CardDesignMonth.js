import React, { useState } from 'react'
import ModalForAddButton from './ModalForAddButton';
import ModalForShowingEventOnDate from './ModalForShowingEventOnDate';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const CardDesignMonth = ({eachDay,currentMonth,currentYear}) => {

    //This For Add Modal
    const [showAddingEvent, setShowAddingEvent] = useState(false);
    const handleAddingEventClose = () => setShowAddingEvent(false);
    const handleAddingEventShow = () => setShowAddingEvent(true);

    //This For Event showing Modal
    const [showEventForDate, setShowEventForDate] = useState(false);
    const handleShowEventForDateClose = () => setShowEventForDate(false);
    const handleShowEventForDateShow = () => setShowEventForDate(true);

    //Showing or removing the Add or Edit Icon
    const [showEditAddIcon,setShowEditAddIcon] = useState(false) 
    const handleShowEditAddIcon = () => {
        setShowEditAddIcon(true)      
    }
    const handleHideEditAddIcon = () => {
        setShowEditAddIcon(false)      
    }
    
    //to find today in calender
    const today = new Date()
    let d = (today.getDate() === (eachDay))
    let m = (today.getMonth() === currentMonth-1)
    let y = (today.getFullYear(),currentYear)
    let thisdate = false   
    if(d && m && y){
        thisdate = true
    }

    //finding which date has event
    const totalDate = `${currentYear}-${currentMonth}-${eachDay}`
    const events = JSON.parse(localStorage.getItem('events'))
    let pointEventToDate = false
    if(events){
        events.map( event => {
            if(event.date === totalDate){
                pointEventToDate = true;
            }
        })
    }



    return (
        <>
            <div className={ thisdate ? 'card border-primary bg-info text-white':"card border-success"} style={{ minWidth: '6rem' }} onMouseOver={handleShowEditAddIcon} onMouseLeave={handleHideEditAddIcon}>
                <div className="card-body">
                    {pointEventToDate ? <h5 className="card-title"> {eachDay} <EventAvailableIcon cursor='pointer' color='primary' fontSize="small" onClick={handleShowEventForDateShow}/> </h5> : <h5 className="card-title">{eachDay}</h5> }
                </div>
                <p id='EditAddIcon' className="card-text text-right" style={{visibility: showEditAddIcon ? 'visible' : 'hidden' }} >
                     <NoteAddIcon  onClick={handleAddingEventShow} cursor='pointer'/> 
                </p>
                
                <ModalForAddButton 
                    show={showAddingEvent} 
                    handleClose={handleAddingEventClose} 
                    day={eachDay}
                    month={currentMonth}
                    year={currentYear}
                />

                <ModalForShowingEventOnDate 
                    show = {showEventForDate}
                    handleClose={handleShowEventForDateClose} 
                    day={eachDay}
                    month={currentMonth}
                    year={currentYear}
                />
            </div>
        </>
    )
}

export default CardDesignMonth
