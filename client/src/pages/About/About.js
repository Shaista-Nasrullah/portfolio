import React from "react";
import "./About.css";


const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/images/myPic.jpg" alt="Profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Welcome to my portfolio! I am a dedicated web developer with a
                strong focus on MERN stack development, aiming to create dynamic
                and responsive web applications. I hold a master's degree in
                Computer Science, where my research was centered on using
                machine learning and deep learning techniques to detect stress
                patterns. Currently, I’m honing my skills in full-stack web
                development, particularly with the MERN stack, which allows me
                to build efficient, scalable applications. Looking ahead, I’m
                excited about merging my expertise in web development with AI
                technologies to craft intelligent, data-driven solutions that
                enhance user experiences. I believe in continuous learning and
                innovation, and I’m eager to apply my diverse skill set to
                future projects.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
