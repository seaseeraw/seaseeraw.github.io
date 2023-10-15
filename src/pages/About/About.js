import React from "react";
import './About.css';
const About = () =>{
    return(
        <>       
      
      <div3 className="middlediv">
         <h2>Tools</h2>
            <table border="5" cellSpacing="1">
                <thead>
                    <tr>
                        <th>Tool name</th>
                        <th>Introduced when</th>
                        <th>Advantage</th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Git</td>
                        <td>1 August 2023</td>
                        <td>
                            <ol>
                                <li>Good Platform to pracrice coding and pushing</li>
                                <li>Branching capabilities and merging are easy (as they are cheap), and they have good data integrity.</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>15 September 2023</td>
                        <td>
                            <ol>
                                <li>Easy platform to learn builting application and user friendly</li>
                                
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>Css</td>
                        <td>2020</td>
                        <td>
                            <ol>
                                <li>Good platform to make website look attractive</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>  
      </div3>

      <footer>
            <div4 className="column1">
                 
 
<p>Experience</p>
 
 <ul>
                {/* <ul style={"list-style-type:disc"}> */}
                    <li>Working on React</li>
                    <li>On CSS</li>
                    <li>On Github</li>
                    <li>Teaching</li>
                </ul>
            </div4>
               
            <div4 className="column1">
                 
 
<p>Skills</p>
 
 
                <ul>
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>Github</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
            </div4>
                
            <div4 className="column1">
                 
 
<p>My knoeledge on</p>
 
 
                <ul>
                    <li>Company-wise</li>
                    <li>Topic-wise</li>
                    <li>Contests</li>
                    <li>Subjective Questions</li>
                </ul>
            </div4>
        </footer>

        </>
       
    )
}

export default About;