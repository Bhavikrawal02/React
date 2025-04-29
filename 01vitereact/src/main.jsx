// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import React from 'react'

// createRoot(document.getElementById('root')).render(
//   <StrictMode> 
//     <App />
//   </StrictMode>,
// )

// here dom Element is created and in this we are agiving app to get render no app.js is passes to index .html where main .jsk is served as a javascipt file basicallly this main.jsk is a js file index.html is a html file in which script is of main.jsx and app.jsk  is a html element tag file
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function Myfun(){
//     return (
//         <>
//         <h1>this is my function</h1>

//         </>    
// )
// }
const ReactElement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'Click me to visit Google' 
)


const anotherElement=(
    <a href="https://google.com>" target="_blank"> Visit google</a>
)

createRoot(document.getElementById('root')).render(
//  anotherElement
//  <Myfunc/>
ReactElement
)
