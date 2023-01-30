import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <div className="logo">
            <NavLink to="/">
              <h2>
                <span>D</span>rama
                <span>T</span>ic
              </h2>
            </NavLink>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur id vitae, odit corrupti a voluptas laboriosam. Quae
            laboriosam soluta dolores molestiae, doloribus , optio velit modi
            quam non quasi, qui aspernatur.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/" rel="opener">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/" rel="opener">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" rel="opener">
              <AiOutlineTwitter />
            </a>
            <a href="https://instagram.com/" rel="opener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Premalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact US</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 HOANGKHA TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
