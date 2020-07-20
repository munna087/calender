import React, {useState} from 'react'

function HookCounter() {

    const [name,setName] = useState({firstName: '' ,lastName: ''})

    return (
        <div>
            <form>
                <input type='text' placeholder='first_name'>
                    value={name.firstName}
                    onChange={ e=> setName({firstName: e.target.value})}
                </input>
                <br></br>
                <input type='text' placeholder='last_name'>
                    value={name.lastName}
                    onChange={ e=> setName({lastName: e.target.value})}
                </input>
                <br></br>

                <p>First Name: {name.firstName} </p>
                <p>Last Name: {name.lastName} </p>



                
            </form>

        </div>
    )
}

export default HookCounter
