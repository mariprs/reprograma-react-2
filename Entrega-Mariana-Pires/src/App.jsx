import { useState } from 'react'
import './App.css'
import { ConsumeRepos } from './components/ApiConsume'
import { Img } from './components/Img'
import { Title } from './components/Presentation'
import { Paragraph } from './components/Paragraph'
import { Footer } from './components/Footer'
import { OfficialTitle } from './components/OfficialTitle'

function App() {
  return (
    <div className="App">
      <OfficialTitle />
      <Title />
      <Img />
      <Paragraph />
      <ConsumeRepos />
      <Footer />
    </div>
  )
}

export default App
