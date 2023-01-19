//App.js
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'; 
import Footer from './components/Footer'
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}></Route>
        <Route exact path = "/menu" element = {<Menu/>}></Route>
        <Route exact path = "/about" element = {<About/>}></Route>
        <Route exact path = "/contact" element = {<Contact/>}></Route>
      </Routes>
      <Footer />
      </Router>
    
    </div>
  );
}

export default App;
