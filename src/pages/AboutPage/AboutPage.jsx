import React from "react";
import "./AboutPage.css";
import ReactPlayer from "react-player";

function AboutPage() {
  return (
    <>
      {/* ================================ COM_1_SEC ===============================*/}

      <div className="about_sec">
        <div className="container">
          <div className="about_raw">
            <div className="Com1_main">
              <div className="flex_box">
                <div className="left_box">
                  <h1>About</h1>
                </div>

                <div className="right_box">
                  <div className="des_line"></div>
                  <div className="line1">
                    <h3>We provide fresh and healthy plants for your space</h3>
                  </div>
                  <div className="line2">
                    <p>
                      Tincidunt ut pellentesque arcu molestie dolor, nunc
                      feugiat sit mauris semper platea urna, sapien fermentum
                      venenatis etiam enim ullamcorper phasellus tortor justo
                      sapien faucibus in adipiscing risus adipiscing bibendum
                      nec eget tincidunt sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ VIDEO_SEC ===============================*/}

      <div className="video_sec">
        <div className="container">
          <div className="video_raw">
            <div className="video_div">
              <ReactPlayer
                url="https://youtu.be/sVPYIRF9RCQ"
                controls={true}
                width="auto"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================ COM_3_SEC ===============================*/}

      <div className="our_story_sec">
        <div className="container">
          <div className="our_story_sec_raw">
            <div className="Com3_flex_box">
              <div className="Com3_left_box">
                <h5>OUR STORY</h5>
              </div>
              <div className="Com3_right_box">
                <div className="pad_box">
                  <div className="line_1">
                    <p>
                      Tristique dapibus porta viverra sit accumsan integer
                      semper dolor etiam id iaculis feugiat egestas urna est
                      magna euismod donec facilisis sed integer orci ac.
                    </p>
                  </div>
                  <div className="line_2">
                    <p>
                      Mi et tincidunt ut pellentesque arcu molestie dolor, nunc
                      feugiat sit mauris semper platea urna, sapien fermentum
                      venenatis etiam enim ullamcorper phasellus tortor justo,
                      et, pellentesque pellentesque sapien faucibus in
                      adipiscing risus adipiscing bibendum in nec eget tincidunt
                      in in sed magna arcu molestie nec mauris quisque.
                    </p>
                  </div>
                  <div className="line_3">
                    <p>
                      Feugiat lacus sagittis, mauris, lobortis velit ullamcorper
                      vitae in volutpat faucibus elementum, sodales orci mi
                      fames molestie venenatis nunc hendrerit.
                    </p>
                  </div>
                  <div className="line_4">
                    <div className="logo">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <div className="para">
                      <h6>
                        Massa aliquam montes, odio porttitor sit ac maecenas
                        interdum ut tincidunt nisl erat quam eu natoque in nisl,
                        lobortis sapien in nec ullamcorper vel.
                      </h6>
                    </div>
                    <div className="user_flex_box">
                      <div className="user_logo_box">
                        <div className="logo_outer_div">
                          <div className="user_img">
                            <img
                              src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-owner-avatar-img.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user_name_box">
                        <div className="about_user_name">EMILY EVERGREEN</div>
                        <div className="user_job">Founder, Owner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================== PHOTO_GALLERY_SEC ========================*/}

      <div className="gallery_sec">
        <div className="container">
          <div className="gallery_raw">
            <div className="gallery_sec_flex_box">
              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4.jpg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
