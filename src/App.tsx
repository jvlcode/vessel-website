import './App.css'
import Home from './Home'
import MarineHomepage from './Home2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/home2' Component={Home} />
      <Route path='/' Component={MarineHomepage} />
    </Routes>
  </BrowserRouter>
  return <MarineHomepage/>
  return <Home/>
}

export default App
