import React, { useState } from "react";
import "./CardStructure.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Features/cartSlice";

function CardStructure({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card_sec">
        <div className="Cardmain">
          <img src={data?.img} className="card_img" />

          <div className="card_det">
            <div className="inner_det">
              <h4>{data?.name}</h4>
              <p className="card_desc3">{data?.description3}</p>
              <span className="card_price">${data?.price}</span>
              <h6 onClick={() => CardNav()} className="card_det_link">
                {data?.link}
              </h6>
            </div>
          </div>

          <div className="cart_logo">
            <figure
              title="Add to cart"
              onClick={() => dispatch(addToCart(data))}
            >
              {" "}
              <NavLink>
                {" "}
                <i className="fa-solid fa-cart-arrow-down"></i>
              </NavLink>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardStructure;
