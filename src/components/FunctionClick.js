// import React from 'react'

// function FunctionClick() {

//     function clickHandler(){
//         console.log('button clicked')
//     }

//     return (
//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     )
// }

// export default FunctionClick

import React, { Component } from 'react'

class FunctionClick extends Component {

    clickHandler(){
        console.log('clicked the button again')
    }


    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click again</button> 
            </div>
        )
    }
}

export default FunctionClick

