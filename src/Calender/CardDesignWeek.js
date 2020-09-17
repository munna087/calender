import React from 'react'
import {Card,Button} from 'react-bootstrap'

const CardDesignWeek = ({eachDay}) => {
    return (
        <>
            <div className="card text-white bg-success" style={{minWidth: '6rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{eachDay}</h5>
                </div>
            </div>
        </>
    )
}

export default CardDesignWeek
