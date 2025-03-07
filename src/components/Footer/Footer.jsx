import React from 'react';
import "../../../src/App.css";
import "../../../src/components/Footer/Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div  className="footer coll_footer footer-padding">
        <div  className="footer-links">
          <div className="footerlinksdiv">
            <h4>Business</h4>
            <a  href="/employer"> <p>Employer</p></a>
            <a  href="/healthplan"> <p>HealthPlan</p></a>
            <a  href="/individual"> <p>Individual</p></a>
          </div>
          <div className="footerlinksdiv">
            <h4>Resources</h4>
            <a  href="/resources"><p>Call Center</p></a>
            <a  href="/resources"><p>Testimonials</p></a>
            <a  href="/resources"> <p>TV</p></a>
          </div>
          <div className="footerlinksdiv">
            <h4>Partners</h4>
            <a  href="/employer"> <p>Swing Tech</p></a>
          </div>
          <div className="footerlinksdiv">
            <h4>Company</h4>
            <a  href="/aboxx"><div><p>About</p></div></a>
            <a  href="/press"><div><p>Press</p></div></a>
            <a  href="/resources"><div><p>Career</p></div></a>
            <a  href="/contact"><div><p>Contact</p></div></a>
          </div>
          <div className="footerlinksdiv">
            <h4>Follow us</h4>
            <div className="socialmedia">
              <FaTwitter  size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
              <FaLinkedin  size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
              <FaInstagram size={30} color='#0f4b9b' style={{ marginLeft: 10 }} />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              {(new Date().getFullYear())} All rights reserved ---&gt; (Trisha Devchoudhury).
            </p>
          </div>
          <div className="footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
