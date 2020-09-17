import React from 'react'
import MyCalender from './MyCalender'

const ReactCalender = () => {
    return (
        <div>
            <section id='header' className=''>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <h1>Calender</h1>
                            <MyCalender />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReactCalender
