import React from "react";
import "./GiftPage.css";

function GiftPage() {
  return (
    <>
      <div className="giftpage_sec">
        <div className="container">
          <div className="giftpage_raw">
            <div className="giftpage_flex">
              <div className="giftpage_bg">
                <form action="#">
                  <h1>GIFT CARD</h1>
                  <div className="form_flex">
                    <label htmlFor="">To:</label>
                    <input type="text" />
                  </div>
                  <div className="form_flex">
                    <label htmlFor="">From:</label>
                    <input type="text" />
                  </div>
                  <div className="form_flex">
                    <label htmlFor="">Amount:</label>
                    <input type="text" />
                  </div>
                  <div className="form_flex">
                    <label htmlFor="">code:</label>
                    <input type="text" />
                  </div>
                  <div className="form_btn_flex">
                    <button className="form_btn">Create Card</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiftPage;
