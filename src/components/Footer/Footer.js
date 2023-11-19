import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section class="tem" id="contact-us">
      <div class="in">
           <div class="basic-info">
          

          <p>
            32 Fifth Street <br />
            Granville, New South Wales 2142
          </p>
          <p>(02) 433624201</p>
          <p>seaseeraw12@gmail.com</p>
        </div>
        

        <div class="information">
          <h5>INFORMATION</h5>
          <a href="#">
            <p>About Me</p>
          </a>
          <a href="#">
            <p>Careers</p>
          </a>
          <a href="#">
            <p>Privacy & Security</p>
          </a>
          <a href="#">
            <p>FAQs</p>
          </a>
        </div>
        <div class="subscribe">
          <h5>My Social Media</h5>
          <div className="social-icons i">
          <a href="#">
          <img className="social-icons i" src="th.jpg" width="30px" alt="" />
          </a>
            <a href="#">
            <img className="social-icons i" src="tho.jpg" width="30px" alt="" />
             </a>
             <a href="#">
            <img className="social-icons i" src="ins.jpg" width="30px" alt="" />
             </a>
          </div>
        </div>
      </div>
      <footer class="last">
        <p>
          &#169;2023 My Portfolio | All rights reserved. Designed by Shishir Pathak
          
        </p>
      </footer>
    </section>
  );
};

export default Footer;