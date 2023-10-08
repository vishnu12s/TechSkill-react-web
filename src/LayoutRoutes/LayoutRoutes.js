import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Courses from '../components/pages/Courses/Courses'
import Plans from '../components/pages/Plans/Plans'
import About from '../components/pages/AboutUs/About'

function LayoutRoutes() {
  return (
    
    <Router>
        <Header/>
        <Routes>
            <Route path='/TechSkill-react-web' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='services' element={<Plans/>}/>
            <Route path='courses' element={<Courses/>}/>
            <Route path='aboutus' element={<About/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes