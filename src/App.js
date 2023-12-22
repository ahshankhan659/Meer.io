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

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <Services/>
    <Project/>
    <Pages/>
    <Chart/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
