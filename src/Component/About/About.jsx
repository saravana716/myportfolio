import React from "react";
import "./About.css";
import Myimage8 from "../1708772584047.JPEG";
import { GoDotFill } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => {
  const resumenavigate = useNavigate();
  function gotoresume(params) {
    resumenavigate("/resume");
  }
  const fadin = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  function gotocontact(params) {
    resumenavigate("/contact")
  }
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about1">
          <div className="about2">
            <div className="myimages12345"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <div
                className="aboutimg"
                variants={fadin}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <img src={Myimage8} alt="" />
              </div>
              <h4>ABOUT US</h4>
            </div>
            <h3
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <GoDotFill className="icon" />
              biography & abilities
            </h3>
          </div>
          <div className="aboutme">
            <div className="mycontent" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="800">
              <div className="aboutme1">
                <h1>Saravanapriyan</h1>
                <h5>FullStackDevelopher</h5>
              </div>
              <div className="aboutimages">
                <img src={Myimage8} alt="" />
              </div>
            </div>
            <div className="mycontent1">
              <h2>
                I'M SARAVANAPRIYAN, A SKILLED AND INNOVATIVE FULLSTACK
                DEVELOPHER. MY EXPERTISE LIES IN CREATING INTUITIVE AND VISUALLY
                APPEALING U EXPERIENCES THAT CAPTIVATE USERS.
              </h2>

              <div className="PersonalInfo">
                <div className="info">
                  <h3>Name :</h3>
                  <h3 title="">Saravanapriyan</h3>
                </div>
                <div className="info">
                  <h3>Email :</h3>
                  <h3 title="">vsaravana716@gmail.com</h3>
                </div>
                <div className="info">
                  <h3>Phone :</h3>
                  <h3 title="">9342508799</h3>
                </div>
                <div className="info">
                  <h3>Date of birth :</h3>
                  <h3 title="">21 May 2000</h3>
                </div>
                <div className="info">
                  <h3>Nationality :</h3>
                  <h3 title="">Indian</h3>
                </div>
                <div className="info">
                  <h3>Address :</h3>
                  <h3 title="">Sivakasi,Tamilnadu-626130</h3>
                </div>
              </div>
              <div className="btn">
                <button onClick={gotoresume}>
                  <h6>RESUME</h6>
                </button>
                <button>
                  <h6 onClick={gotocontact}>CONTACT</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
