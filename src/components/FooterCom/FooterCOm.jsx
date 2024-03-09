import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./FooterCom.css";

function FooterCOm() {
  return (
    <>
      <div className="footer_main">
        <div className="footer_bg">
          <div className="container">
            <div className="footer_row">
              <div className="line_1">
                <li>
                  <a className="footer_anchor" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="footer_anchor" href="">
                    Plants
                  </a>
                </li>
                <li>
                  <a className="footer_anchor" href="">
                    About
                  </a>
                </li>
                <li>
                  <a className="footer_anchor" href="">
                    Contact
                  </a>
                </li>
              </div>
              <div className="box_2">
                <div>
                  <h4 className="line_2">Subscribe to our newsletter</h4>
                </div>
                <div className="line_3">
                  <div>
                    <input
                      className="footer_input"
                      type="text"
                      placeholder="Your email address..."
                    />
                  </div>
                  <div>
                    <button className="footer_btn">Subscribe</button>
                  </div>
                </div>
                <div className="line_4">
                  <a href="">
                    <Instagram size={24} color="#ab9b9b" strokeWidth={1.5} />
                  </a>
                  <a href="">
                    <Facebook size={24} color="#ab9b9b" strokeWidth={1.5} />
                  </a>
                  <a href="">
                    <Twitter size={24} color="#ab9b9b" strokeWidth={1.5} />
                  </a>
                </div>

                <div className="footer_bottom">
                  <p className="para">
                    &copy; 2024 Plant Shop. Powered by Niihar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCOm;
