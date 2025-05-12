import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex">

    <Card title='Aeroplane' name='bhavik'/>
    <Card title='Flight' name='rawal'/>
    <Card title='helicopter' name='rafel'/>
    <Card title='jet' name='d-400'/>
    <Card title='armyjet' name='f-16'/>
    <Card title='heli' name='b-20'/>

    </div>
    </>
  )
}

export default App
