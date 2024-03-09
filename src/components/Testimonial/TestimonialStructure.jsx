import React from "react";
import "./TestimonialStructure.css";

function TestimonialStructure({ testi_data }) {
  return (
    <>
      <div className="testi_main">
        <div className="testi_raw">
          <div className="testi_quote">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className="comments">
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
          </div>
          <div className="user_box">
            <div className="user_pic_middle">
              <div className="user_pic">
                <figure>
                  <img src={testi_data?.img} alt="" />
                </figure>
              </div>
            </div>
            <div className="user_name">
              <p>{testi_data?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialStructure;
