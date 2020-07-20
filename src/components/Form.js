import React, { useState } from 'react'

const Form = (props) => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    
    const clickEvent = (e) => {
        e.preventDefault();
        console.log(`First Name: ${firstName}`)
        console.log(`Last Name: ${lastName}`)
        console.log(`Email: ${email}`)
    }

    return( 
        <div>
            <form onSubmit={clickEvent}>
                <h3>Your Biodata:</h3>
                <input type='text' title='first name' value={firstName} required onChange={(e) => setFirstName(e.target.value)} /><br></br><br></br>
                <input type='text' title='last name' value={lastName} required onChange={(e) => setLastName(e.target.value)} /><br></br><br></br>
                <input type='text' title='email' value={email} required onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
                <input type='submit' value='Submit'/><br></br>
            </form>
        </div>
    ) 
}

export default Form;