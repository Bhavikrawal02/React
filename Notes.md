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



*********VIRTUAL DOM**********

NOW VIRTUAL DOM IS NO LONGER USED IN REACT

Article-> 
createRoot method in main.jsx -> this create a complete virtual dom same as browser dom

virtual dom compare itself with the main dom and only updates those changes that are done in ui of virtual dom 
while browser remove whole dom and create new dom with updates that is page reloading thats why page reload 

***reconciliation***
this is the algorithm that uses to differentiaite one tree form anopther to determine which parts need to be chnaged 

compare virtual dom and browser dom 

which part to changed 

**update**
a change in the data used to render a react app usually the result of setState 

******React Fibre******
https://github.com/acdlite/react-fiber-architecture

React Fiber is an implementation of React's core algorithm.

 key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.


Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes(jsx objects) that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.


 Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

 key is used in iteration like in .map we use key 


The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.



********fiber*******
pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.


*********tailwind and props****

each tag in tailwind is always closing || the img tag is not closing in normal but  in tailwind it is

***props***

props-> properties are a way to pass data from parent component to child component 
they makes componenet resuable 

how to use props 
<Card title='bhavik' /> 
use this in component 
const Card=(tprops)=>{
    return (
        <>
        </>
    )
}


***React interview follow up of counter quesdtion  ***

 const [count, setCount] = useState(0)
  function increase(){
    // setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);

    // what happen?
    // counter will increase by one only  because this all happens in batch like system.. if we want to do this we can use callback 
    

    // both below are same 
    // setCount((prevCounter)=>prevCounter+1);
    // setCount((Counter)=> Counter+1)


    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
    //  setCount((prevCounter)=>prevCounter+1);
  

  }
  function decrease(){
    setCount(count-1);
  }

  ***OnClick**
  on click  function needs the function not a value 
  hence when we use onclick we should give a reference as if we use "setcolor()" it will call the function 

  now if we want to pass the parameter use onClick={()=> setColot('Red)}

**useCallback hook**

useCallBack hook is used to memoize or cache a function definition across rerender

syntax= const pass gen= useCallback(()=>{},[]arry of dependencies)

****useEffect hook****

The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering.

syntax
useEffect(()=>{

},[])

**useref**

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

syntax:

const passref= useRef()

ref={passref}-> in any html element


**custom hooks** 
create a file in folder hooks and  create a file in it name as hookname.js

create a function  and export it 


**React Router**
React router dom  is a react routing library for navigation between pages

navigate between componensts and pages 
handle multiple url in single page 
pass data via router parameter



link and navlink are provided in react-router dom 

link -> alternatice for a tag ( a tag make the complete page get reloaded)

Link and nav link both are used for navigation the main difference between them is that navlink has extra functionalities compare to link 
nav link provide the option for the active state


**outlet**
it is a react-router-dom element that is used to display elements dyncamically it privide a way to make content fix while the outlet will chnage



**Routing**
in main.jsx in we are rendering app but for route we will use different 
use RouteProvider for rendering -> take props of Router={Router}
define router
const router= CreaterBrowserRouter([

])
createBrowserRouter Takes and array and in array objects -> path element , children

for dynamic use outlet

**dynamic data**

**UseParams**
UseParams is a react router dom hooks that is used to access the paramnet from the url of the site 
import UseParams from 'react-router-dom'

const {userid} = UseParams()


in routins <Route path:'user/:userid' element={<User/>} />



















