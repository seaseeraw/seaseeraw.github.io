import React from "react";
import './Home.css';
const Home = () =>{
    return(
        <>
         {/* <div className="row">
  <div className="column">
    <h2>My intro</h2>
    <p>I am a Computer graduate with losts of skills in field of computer technology</p>
  </div>
  
  <div className="column">
    <h2>My vision</h2>
    <p> I want to use all my skills I have in my future</p>
  </div>
  
  <div className="column">
    <h2>My education background</h2>
    <p>I have done my high school from my home country Nepal.I have done my diploma on Australian certified institute and Bacholers Degree in Computer science from CIHE</p>
  </div> 
          </div> */}
          <h1 style={{color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",textAlign:"center"}}>"Hello I Am A Computer Graduate With Good Skills On Computer Tools"</h1>

          <div1 className="leftdiv">
         <h1>My education</h1>
         <p>I have done my high school from my home country Nepal.I have done my diploma on Australian certified institute and Bacholers Degree in Computer science from CIHE
      </p>
      </div1>
      <div2 className="middle1div">
         <h2>My intro</h2>
         <p2>I am a Computer graduate with losts of skills in field of computer technology
         </p2>
      </div2>
      <div1 className="rightdiv">
         <h3>My Vision</h3>
         <p>I want to use all my skills I have in my future
         </p>
      </div1>
       </>
    )
}

export default Home;
