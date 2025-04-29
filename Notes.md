Test

vite app-> there are different javascript files this is a bundler that combine all the file and give it to us

npm -> node pacakage manager 
npx -> node package execute-> used to run any package 


to create a project 

npx creater-react-app name_of_project

this is very slow->it is very bulky 

package.json-> imp, dependency
scripts ->used to run this project 
start, build->production, test,eject



npm run build -> gives a new build folder used for production and deploy

vite bundler: npm create vite@latest to create a project

note: make sure you are in right folder 
use ls to check paclage .json is there or not else mpove to correct folder and run npm i 

npm run dev tp start project


flow of react  vite app

index.html is out main html file in which we have a div element and a script -> js file 

main.jsk is out js file linked in index.html and in main.jsk we are creating a dom and just rendering it in dom elemtn we have a html element 

main .jsk is rendering an app.jsk 

app.jsk is a file which contain a fucntion that contain html adn we are returning the html 


* make sure *-> if we create our own component we need to have first letter as upper case and name shoul be .jsx not js 


we cannot return multiple html ele in hence we use fragmant to wrap multiple html elements


***BABEL***
Modern JavaScript (like arrow functions, classes, async/await, etc.) isn't supported in all browsers, especially older ones. Babel helps by:

Transpiling modern JS code into older versions (like ES5)

Ensuring cross-browser compatibility

Supporting JSX (used in React), which browsers don’t understand natively

🔄 How it works:
You write modern JavaScript or JSX code.

Babel takes that code and transforms it into plain JavaScript that all browsers can understand.

This transformed code is then run in the browser.

🧩 Babel is often used with:
Webpack or Vite (module bundlers)

React (to compile JSX)

babble is transpiler that convert whole react code in js form under the hood 


**customised** react  

create a object that serve as a single elememnt like a, div , p 

function customRender(reactElement,container){
    // const domele=document.createElement(reactElement.type)
    // domele.innerHTML=reactElement.children
    // domele.setAttribute('href',reactElement.props.href)
    // domele.setAttribute('target',reactElement.props.target)
    // container.appendChild(domele)
    const domele=document.createElement(reactElement.type)
    domele.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
        if(prop==='children') continue;

       domele.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domele)

}

const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"click here to visit Google
}

render this react ele 
const maincontainer= document.querySelector('#root')
renderelement(reactElement, maincontainer)







***********something***********

**app.jsk**

import Chai from "./Chai";

function App() {

  return (
   <Chai/>
  )
}

export default App;

**main.jsx**

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

in the main.jsk app is a function so we can create a function in main.jsk in same file and use it there?

 yes we can do this 

 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

function Myfun(){
    return (
        <>
        <h1>this is my function</h1>

        </>    
)
}

createRoot(document.getElementById('root')).render(
    <Myfun />
)

can we use Myfunc() directly ? yes

myfunc in the end get  transpiled in this way only so we can use this also

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
can we use above in rendering 

no because react render need different parameter and diff syntax 

the syntax react render need is :

const anotherElement=(
    <a href="https://google.com>" target="_blank"> Visit google</a>
)


//element according to react 

const reactElement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    }
    Click me to visit Google 
)


createRoot(document.getElementById('root')).render(
   reactElement
)


**imp**

how to use variable in jsx->Using curly braces 

import Chai from "./Chai";

function App() {

  const username="Bhavik Rawal"
  return (
    <>
    <h1>Owner Name is {username}</h1>
   <Chai/>
   </>
  )
}

export default App;


{username}->this is evaluated expression 

we cannot use {is(true) username}->not correct X

for evaluation we can do in function 


why not {if(true) username}
in the end it is converted into object and in object we cannot use if else 

{final outcome of javascript}

***********hooks***********

REACT DOESNOT RE RERENDER THE COMPONENT so value remian unchange in ui

if we use normal variables in react they do not get updated in ui but get updated in normal way 

like i have a counter-> when i increase the counter it gert increased but does not reflect in ui 

a single variable can be at many place 

when we have a multiple variables in core javascript then we get many reference fpr each vaiable to update 

counter is in a div, p, button, span we need to refer all and update all simultaneously 

to solve this problem 
react is responsible for the control on ui -> special methods hooks through which data will be updated 


"REACT CONTROL UI UPDATION "

**use State**

const [counter,setCounter]= useState(15)

react rerender the component when there is change in state 

useState is a React hook that allow functionanl component to have state-> state is a way to store and manage the information to change overtime and trigger ui update when it does

"syntax:
\const [stateVariable, setStateFunction] = useState(initialValue);


















