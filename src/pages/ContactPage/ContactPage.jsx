import React from "react";
import "./ContactPage.css";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

function ContactPage() {
  return (
    <>
      {/* ======================================= SEC_1 ========================================== */}

      <div className="contact_page_sec">
        <div className="container">
          <div className="contact_page_pad">
            <div className="contact_page_flex">
              <div className="contact_page_leftbox">
                <div className="leftbox_contents">
                  <div>
                    <h1 className="contact_leftbox_line1">Get In Touch</h1>
                  </div>
                  <div>
                    <p className="contact_leftbox_line2">
                      Sit vulputate faucibus eget eget scelerisque faucibus
                      malesuada nullam mollis ut montes, dui scelerisque ornare.
                    </p>
                  </div>

                  <div className="contact_leftbox_line3">
                    <div className="contact_leftbox_line3_flex">
                      <div className="logo">
                        <MapPin color="#44960d" />
                      </div>
                      <div className="visit_us">
                        <div style={{ fontFamily: "emoji" }}>VISIT US</div>
                        <div style={{ fontWeight: "bold", color: "#646060" }}>
                          123 Demo St, San Francisco, CA 45678, United States
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact_leftbox_line4">
                    <div className="contact_leftbox_line4_flex">
                      <div className="logo">
                        <Phone color="#44960d" />
                      </div>
                      <div className="call_us">
                        <div style={{ fontFamily: "emoji" }}>CALL US</div>
                        <div style={{ fontWeight: "bold", color: "#646060" }}>
                          +1 123-456-7890
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact_leftbox_line5">
                    <div className="contact_leftbox_line5_flex">
                      <div className="logo">
                        <Mail color="#44960d" />
                      </div>
                      <div className="email_us">
                        <div style={{ fontFamily: "emoji" }}>EMAIL US</div>
                        <div style={{ fontWeight: "bold", color: "#646060" }}>
                          mail@example.com
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lin">
                    <hr />
                  </div>

                  <div className="follow_us">
                    <div style={{ fontFamily: "emoji", paddingTop: "20px" }}>
                      FOLLOW US
                    </div>
                    <div className="social_media_icons">
                      <div className="insta-logo">
                        <Instagram color="#000000" />
                      </div>

                      <div className="facebook_logo">
                        <Facebook color="#000000" />
                      </div>
                      <div className="youtube_logo">
                        <Youtube color="#000000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_page_rightbox">
                <div className="contact_rightbox_pad">
                  <div className="rightbox_content">
                    <div>
                      <h2 className="right_box_heading">
                        Drop us a line or two
                      </h2>
                    </div>
                    <div className="form_box">
                      <div className="name_box">
                        <li>
                          <label
                            htmlFor="name"
                            style={{
                              fontWeight: "bold",
                              color: "rgb(74 69 69)",
                            }}
                          >
                            Name{" "}
                          </label>
                        </li>
                        <li>
                          <input
                            className="name_input"
                            type="text"
                            placeholder="Full name"
                          />
                        </li>
                      </div>
                      <div className="Email_box">
                        <li>
                          <label
                            htmlFor="email"
                            style={{
                              fontWeight: "bold",
                              color: "rgb(74 69 69)",
                            }}
                          >
                            Email{" "}
                          </label>
                        </li>
                        <li>
                          <input
                            className="email_input"
                            type="email"
                            placeholder="Email address"
                          />
                        </li>
                      </div>
                      <div className="Comment_box">
                        <li>
                          <label
                            htmlFor="comment"
                            style={{
                              fontWeight: "bold",
                              color: "rgb(74 69 69)",
                            }}
                          >
                            Comment or Message{" "}
                          </label>
                        </li>
                        <li>
                          <input
                            className="comment_input"
                            type="text"
                            placeholder="Your message"
                          />
                        </li>
                      </div>
                      <div>
                        <button className="contact_rightbox_btn">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================= MAP_SEC_1 ========================================== */}

      <div className="map_sec">
        <div className="container">
          <div className="map_raw">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=1200&amp;height=448&amp;hl=en&amp;q=Tops technology surat&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://gachanox.io/">Gacha Nox APK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
