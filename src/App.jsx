import React from 'react'
import NavBar from './Compontes/NavBar/NavBar'
import { action,originals,horror } from './Urls'
import './App.css'
import Banner from './Compontes/Banner/Banner'
import RowPost from './Compontes/RowPost/RowPost'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost  url={action} title='Action' isSmall  />
      <RowPost  url={horror} title='Horror' isSmall  />      
    </div>
  )
}

export default App

