import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'
import User from './Components/User.jsx'
import { githubinfo } from './Components/Github.jsx'



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>} />
       <Route path='contact' element={<Contact/>} />
       <Route path='user/:userid' element={<User/>}/>
       <Route loader={githubinfo} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
