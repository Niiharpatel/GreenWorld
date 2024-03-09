import React, { useState } from "react";
import "./HomePage.css";
import homeData from "./homeCardData.json";
import testiData from "../../components/Testimonial/testiData.json";
import TestimonialStructure from "../../components/Testimonial/TestimonialStructure";
import GiftCard from "../../components/GiftCard/GiftCard";
import HomeCard from "./HomeCard";
import { useNavigate } from "react-router";

function HomePage() {
  const [data, setData] = useState(homeData);
  const [testidata, setTestidata] = useState(testiData);

  const navigate = useNavigate();

  const aboutNav = () => {
    navigate("/about");
    window.scroll(0, 0);
  };

  return (
    <>
      {/* ========================= HERO SEC ======================== */}

      <section className="hero_sec">
        <div className="hero_bg">
          <div className="container">
            <div className="hero_sec_raw">
              <div className="hero_content">
                <h5>WELCOME TO THE STORE</h5>
                <h1>Let's Bring the Spring to your home</h1>
                <button
                  className="hero_sec_btn"
                  onClick={() => navigate("/plant")}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CARD SEC =========================== */}

      <section className="home_card_sec_main">
        <div className="container">
          <div className="home_card_sec_raw">
            <div className="home_card">
              {data?.map((e, i) => {
                return <HomeCard data={e} key={i} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================= OUR_STORY SEC =========================== */}

      <section className="main_plant_blog">
        <div className="main_blog_flex">
          <div className="right_plant_blog">
            <h1>OUR STORY</h1>
            <h3>For People Who Love Plants?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              repudiandae ea ullam quibusdam, similique distinctio!
            </p>
            <button className="our_story_btn" onClick={() => aboutNav()}>
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* ============================= TESTIMONIAL_SEC =========================== */}

      <section className="testimonial_sec">
        <div className="container">
          <div className="testi_sec_raw">
            <div className="testimonial_heading">
              <h2>What Our Customers Say</h2>
            </div>
            <div className="testimonial_flex">
              {testidata?.map((e, i) => {
                return <TestimonialStructure key={i} testi_data={e} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================= GIFTCARD_SEC ============================ */}

      <GiftCard />
    </>
  );
}

export default HomePage;
