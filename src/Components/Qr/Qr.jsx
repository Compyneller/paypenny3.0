import React from "react";
import "./Qr.scss";
import qr from "../../Assets/onlink_to_wjt5cq.svg";

const Qr = () => {
  return (
    <div className="qrMainContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="w-100 ">
              <div className="w-75 mx-auto">
                <h5>Scan to download app</h5>
                <img src={qr} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <h5>Click to download app</h5>
            <div className="qrDownloadButton">
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
              >
                <i className="fa-brands fa-apple "></i>
                <p>Download PayPenny App</p>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
              >
                <i className="fa-brands fa-google-play " />
                <p>Download PayPenny App</p>
              </a>
            </div>
            <div className="qrSocialsButton">
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
    </div>
  );
};

export default Qr;
