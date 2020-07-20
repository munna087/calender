import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Maisha</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyclass'},
        React.createElement('h1',null,'Hello Munna')
    )
}

export default Hello