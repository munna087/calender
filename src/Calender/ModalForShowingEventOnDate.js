import React, { useEffect, useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import ModalForAddButton from './ModalForAddButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ModalForShowingEventOnDate = ({show,handleClose,day,month,year}) => {

    const eventsFromLocalStorage = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
    const [events,setEvents] = useState(eventsFromLocalStorage)

    useEffect( () => {
        setEvents(eventsFromLocalStorage);
    },[localStorage.getItem('events')])

    //This three For Add Modal
    const [showAddingEvent, setShowAddingEvent] = useState(false);
    const handleAddingEventClose = () => setShowAddingEvent(false);
    const handleAddingEventShow = () => setShowAddingEvent(true);

    const [date,setDate] = useState('');
    const [name,setName] = useState('');
    const [detail,setDetail] = useState('');

    const clickedDate = `${year}-${month}-${day}`
    

    // const events = JSON.parse(localStorage.getItem('events'))
    
    let onDayEvent = null
    if(events){
        onDayEvent = events.filter( event => {
            return event.date === clickedDate
        })    
    }

    const handleDelete = (deleteEventDate) => {
        let confirmedToDelete = window.confirm('Are you sure?')
        if(confirmedToDelete){
            const updatedEvents = events.filter( event => {
                return event.date !== deleteEventDate
            })
            localStorage.setItem('events',JSON.stringify(updatedEvents))
            handleClose()
        }
    }

    const handlerSingleEvent = (eventDate,eventName,eventDetail) =>{
        setDate(eventDate)
        setName(eventName)
        setDetail(eventDetail)
        handleClose()
        handleAddingEventShow()
    }
    
    const handlerDeleteSingleEvent = (delDate,delName,delDetail) => {
        let confirmedToDelete = window.confirm('Are you sure?')
        if(confirmedToDelete){
            let afterDeleteEvent = []
            afterDeleteEvent = events.filter(eve => {
                return ( (eve.date !== delDate) || (eve.name !== delName) )
            })
            localStorage.setItem('events', JSON.stringify(afterDeleteEvent))
            setEvents(afterDeleteEvent)
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bg-warning'>
                    <Modal.Title>Event For {day}/{month}/{year} </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    {events && onDayEvent.map( eve => {
                        return(
                            <div key={eve.detail}>
                                <div>
                                    <h2>{eve.name}</h2>
                                    <h5>{eve.detail}</h5>
                                </div>
                                <p className='text-right'>
                                    <EditIcon  onClick={ () => handlerSingleEvent(eve.date,eve.name,eve.detail)} cursor='pointer'/>
                                    <DeleteIcon onClick={ () => handlerDeleteSingleEvent(eve.date,eve.name,eve.detail)} cursor='pointer'/>
                                </p>

                                <hr/>
                            </div>
                        )
                    })}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ () => handleDelete(clickedDate) }>
                        Delete All
                    </Button>
                </Modal.Footer>
            </Modal>
            { showAddingEvent && <ModalForAddButton 
                show={showAddingEvent} 
                handleClose={handleAddingEventClose} 
                day={day}
                month={month}
                year={year}
                editDate = {date}
                editName = {name}
                editDetail = {detail}
            />}
        </div>
    )
}

export default ModalForShowingEventOnDate
