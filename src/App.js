import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Chart from './Components/Chart/Chart';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Pages from './Components/Pages/Pages';
import Project from './Components/Projects/Project';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/service' element = {<Services/>}/>
      <Route path = '/project' element = {<Project/>}/>
      <Route path = '/page' element = {<Pages/>}/>
      <Route path = '/testimonial' element = {<Testimonials/>}/>
      <Route path = '/footer' element = {<Footer/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
