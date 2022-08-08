import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../Assets/twitter.svg";
import facebook from "../../Assets/facebook.svg";
import insta from "../../Assets/instagram.svg";

const Footer = ({ link, text }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="py-5 text-light" style={{ background: "black" }}>
      <div className="container">
        <div className="w-100 mb-4   d-flex justify-content-between align-items-center">
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/tc"
            onClick={() => scrollToTop()}
          >
            Term & Conditions
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/privacypolicy"
            onClick={() => scrollToTop()}
          >
            Privacy Policy
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to={`/${link}`}
            onClick={() => scrollToTop()}
          >
            Contact Us
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light"
            to="/blog"
            target="_blank"
            onClick={() => scrollToTop()}
          >
            Blog
          </Link>
        </div>
        <br />
        <br />
        <div className="row">
          <div className=" col-12 col-lg-10 d-flex">
            <p className="my-auto text-center">
              © paypenny all Rights Reserved. The Brand PayPenny belongs to{" "}
              {text}
            </p>
          </div>
          <div className="col-12 col-lg-2 footerSocials">
            <a target="_blank" href="https://www.facebook.com/PayPennyCa">
              <i id="facebookIcon" className="ri-facebook-circle-line"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/paypennyca?igshid=YmMyMTA2M2Y="
            >
              <i id="instagramIcon" className="ri-instagram-line"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/payPENNY2?s=20&t=4Im5hEodXE-dLog1P9eO-g"
            >
              <i id="twitterIcon" className="ri-twitter-line"></i>
            </a>
            <a target="_blank" href="https://medium.com/@admin_17494">
              <i className="ri-medium-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
