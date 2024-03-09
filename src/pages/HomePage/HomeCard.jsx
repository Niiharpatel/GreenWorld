import React from "react";
import "./HomeCard.css";

function HomeCard({ data }) {
  return (
    <>
      <div className="card_sec">
        <div className="Cardmain">
          <img src={data?.img} className="card_img" />

          <div className="card_det">
            <div className="inner_det">
              <h4>{data?.name}</h4>
              <p className="card_desc3">{data?.description3}</p>
              <h6 onClick={() => CardNav()} className="card_det_link">
                {data?.link}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
