import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
          <img src="/assets/bg.png" className="footer-logo" alt="" />
          <div className="site-links">
            <h3>Site Links</h3>
            <ul>
              <li className="footer-link">
                <Link to="about" className="footer-link">
                  About us
                </Link>
              </li>
              <li className="footer-link">
                <Link to="contact-us" className="footer-link">
                  Contact us
                </Link>
              </li>
              <li className="footer-link">Blog</li>
              <li className="footer-link">Careers</li>
              <li className="footer-link">FAQ</li>
              <li className="footer-link">Join Now</li>
              <li className="footer-link">Privacy Policy</li>
            </ul>
          </div>
          <div className="pr-social-media">
            <div className="pr-title">Let's connect</div>
            <div className="pr-share-icons-card">
              <a href= "#" target="_blank">
                <img
                  className="pr-icon"
                  src="/assets/fb.png"
                  alt="facebook Link"
                  height="32"
                ></img>
              </a>
              <a href= "#" target="_blank">
                <img
                  className="pr-icon"
                  src="/assets/ig.png"
                  height="32"
                  alt="instagram Link"
                ></img>
              </a>
              <a href="#" target="_blank">
                <img
                  className="pr-icon"
                  src="/assets/yt.png"
                  height="32"
                  alt="youtube Link"
                ></img>
              </a>
              <a href="#" target="_blank">
                <img
                  className="pr-icon"
                  src="/assets/twitter.png"
                  height="32"
                  alt="twitter Link"
                ></img>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Footer