import React from "react";
import './Skill.css';
 const Skill = () =>{
    return(
        <>       
      
      
<div className="o">
        
<h2>TECHNICAL SKILLS</h2>
	<p>Proficiency in CSS with knowledge of frameworks like Bootstrap,Flexbox and Grid for responsive design.</p>
	<p>Familiarity with libraries and frameworks such as jQuery and modern frameworks like React.</p>
	Ability to create websites that work seamlessly across various devices and screen sizes using media queries and responsive design principles.
	<p>Proficiency in using Git for version control.</p>

<h2>SOFT SKILLS</h2>
	<p>Attention to detail, time management & customer service skills</p>
	<p>Strong verbal and written communication skills</p>
	Always eager to learn and teamwork
	<p>Ability to prioritize and can work under pressure</p>

      </div>
	  <section className="h">
	  <h1>Tools used</h1>
	  <div className="gallery">
		
    <img src="react.jpg" alt="1" width="600" height="400"></img>
    
  
  <div className="desc">React</div>
</div>

<div className="gallery">
  
    <img src="java.jpg" alt="2" width="600" height="400"></img> 
  
  <div className="desc">JavaScript</div>
</div>

<div className="gallery">
  
    <img src="css.jpg" alt="3" width="600" height="400"></img>
  
  <div className="desc">CSS</div>
</div>

<div className="gallery">

    <img src="web.jpg" alt="Mountains" width="600" height="400"></img>
  
  <div className="desc">Web</div>
</div>
</section>

      </>
    )
}

export default Skill;
