import React from "react";
import './Home.css';
import About from "../About/About";
const Home = () =>{
    return(
        <>
        <div>
        <section className="la">
          <div className="ma">
            <h1>
              Hi I am Shishir Pathak <br />
              I love coding
            </h1>
            <p>I am a graduate in computer science 
              with good Qualification</p>
              <a href="About">
            <button className="explore-button" >More about me
            </button>
            </a>
          </div>
        
        </section>
        </div>
        </>
          
  
      
    
    )
}

export default Home;
