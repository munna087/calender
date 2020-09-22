import React, { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import ModalForShowingEventOnDate from './ModalForShowingEventOnDate'

const ModalForAddButton = ({show,handleClose,day,month,year,editDate,editName,editDetail}) => {

    const [eventName,setEventName] = useState(editName? editName : '')
    const [eventDetail,setEventDetail] = useState(editDetail? editDetail : '')

    //This For Event showing Modal
    const [showEventForDate, setShowEventForDate] = useState(false);
    const handleShowEventForDateClose = () => setShowEventForDate(false);
    const handleShowEventForDateShow = () => setShowEventForDate(true);

    const handleEventName = (e) => {
        setEventName(e.target.value)
    }

    const handleEventDetail = (e) => {
        setEventDetail(e.target.value)
    }

    const handleAddEvent = (day,month,year) => {
        let editEvent = []
        const eventsFromLocalStorage = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
        
        editEvent = eventsFromLocalStorage;
        
        //for Edit
        editName && (editEvent = eventsFromLocalStorage.filter(eve => {
            return ( (eve.date !== editDate) || (eve.name !== editName) )
        }))
        editName && console.log(editEvent) 
        
        const newEvent = [...editEvent,{date:`${year}-${month}-${day}`,name: eventName, detail: eventDetail}]
        localStorage.setItem('events', JSON.stringify(newEvent))
        setEventName('')
        setEventDetail('')
        handleClose()
        handleShowEventForDateShow()  
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className='bg-info'>
                        <Modal.Title> {editName ? 'Edit' : 'Add'} Event For {day}/{month}/{year} </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <Form onSubmit={submitForm}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Event Name" value={eventName} onChange={handleEventName}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1" className='mt-3'>
                                <Form.Label>Event Details</Form.Label>
                                <Form.Control as="textarea" rows="3" value={eventDetail} onChange={handleEventDetail}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleAddEvent(day,month,year)}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>

                {showEventForDate && <ModalForShowingEventOnDate
                    show = {showEventForDate}
                    handleClose={handleShowEventForDateClose} 
                    day={day}
                    month={month}
                    year={year}
                />}
            </div>
    )
}

export default ModalForAddButton
