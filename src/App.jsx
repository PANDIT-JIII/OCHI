
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Services from './pages/Services'
import Ourwork from './pages/Ourwork'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './Contact'

function App() {
  return (
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Ourwork' element={<Ourwork/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Insights' element={<Insights/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App
