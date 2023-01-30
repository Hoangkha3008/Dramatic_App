
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import { SliderData } from '../../../data'
import './home.css'

const home = () => {
  return (
    <>
    <MainHeader slides={SliderData}/>
    <Programs />
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}

export default home