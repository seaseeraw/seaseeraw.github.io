// //  import logo from './logo.svg';
// //  import './App.css';

//  function App() {
//    return (
//     <div className="App">
//      <header className="App-header">
//        {/* <img src={logo} className="App-logo" alt="logo" /> */}
//        <p>
//          {/* Edit <code>src/App.js</code> and save to reload. */}
//          I am a Graduate in Computer Science
//        </p>
//        <a
//         //  className="App-link"
//         //   // href="https://reactjs.org"
//         //  target="_blank"
//         //  rel="noopener noreferrer"
//         >
           
//         </a>
//        </header>
//      </div>
//   );
//  }

// export default App;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
 import Home from './pages/Home/Home';
import About from './pages/About/About';
import  Skill from './pages/Skill/Skill';
import  Contact from './pages/Contact/Contact';
// import Footer from "./components/Footer/Footer";
import{ BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <BrowserRouter>
    <div><Navbar/></div>
      <Routes>
         <Route path="/home" element={<Home />}/>  
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
</>
  );
}

export default App;