 import React from "react";
 import './About.css';
 const About = () =>{
    return(
        <>       
  <div className="about">
       <section className="top-banner">
        <a href="cv.docx">
      <button className="ex">Print CV</button>
</a>
      
      
         
      </section> 
       <section className="is">
        <div className="img">
          
          <img className="image1" src="shi.jpg" alt="" />
        </div>
        <div className="sp">
          <h1>My short intro</h1>
          <p>
         
            I am software engineer with enhance proficiency in core web technologies like HTML, CSS, and JavaScript. Additionally, aim to learn popular frameworks like React, Angular, or Vue.js to broaden my skill set. I am skilled in dealing with problems in a resourceful manner and used to working in a team whilst also can use my own initiative.
          </p>
        </div> 
      </section> 
    </div>




        </>
       
     )
 }

export default About;