import React from "react";
import "./GiftCard.css";
import { useNavigate } from "react-router";

function GiftCard() {
  const navigate = useNavigate();

  const giftNav = () => {
    navigate("/giftcard");
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="giftcard_sec">
        <div className="giftcard_bgimg">
          <div className="container">
            <div className="giftcard_raw">
              <div className="giftcard_content">
                <div>
                  <h6 className="giftcard_content_line1">GIFT CARD</h6>
                </div>

                <div>
                  <h3 className="giftcard_content_line2">
                    Give the Gift of Greenery
                  </h3>
                </div>

                <div>
                  <p className="giftcard_content_line3">
                    Pretium tortor risus enim neque quis pellentesque maecenas
                    proin odio eget arcu
                  </p>
                </div>

                <div>
                  <button
                    className="giftcard_content_line4"
                    onClick={() => giftNav()}
                  >
                    Purchase A Gift Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GiftCard;
