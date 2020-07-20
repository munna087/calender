import React from 'react'

const Greet = (props) => {
    return( 
        <div>
            <h1>Hello {props.name} also known as {props.heroName}</h1>
            <h2>{props.children}</h2>
        </div>
    ) 
}

// const Greet = ({name,heroName}) => {
//     return( 
//         <div>
//             <h1>Hello {name} also known as {heroName}</h1>
//         </div>
//     ) 
// }

// const Greet = (props) => {
//     const {name,heroName} = props
//     return( 
//         <div>
//             <h1>Hello {props.name} also known as {props.heroName}</h1>
//         </div>
//     ) 
// }


export default Greet;