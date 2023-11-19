import React from "react";
import './Skill.css';
 const Skill = () =>{
    return(
        <>       
      
      
     
<div className="one">
        
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
                                <li>Because they are affordable, splitting and joining capabilities are simple and offer outstanding information security.</li>
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
      </div>


      </>
    )
}

export default Skill;
