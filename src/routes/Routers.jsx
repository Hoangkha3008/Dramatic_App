import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../dramatic/pages/home/home'
import About from '../dramatic/pages/about/about'
import Contact from '../dramatic/pages/contact/contact'
import Gallery from '../dramatic/pages/gallery/gallery'
import Plans from '../dramatic/pages/plans/plans'
import Trainers from '../dramatic/pages/trainers/trainers'
import NotFound from '../dramatic/pages/notFound/notFound'
import Navbar from '../dramatic/components/Navbar'
import Footer from '../dramatic/components/Footer'
import Auth from '../dramatic/pages/auth/auth'
const Routers = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path ='about' element={<About/>}/>
        <Route path ='contact' element={<Contact/>}/>
        <Route path ='gallery' element={<Gallery/>}/>
        <Route path ='plans' element={<Plans/>}/>
        <Route path ='trainers' element={<Trainers/>}/>
        <Route path ='auth' element={<Auth/>}/>
        <Route path ='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Routers