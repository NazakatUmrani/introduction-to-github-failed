/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/moasic.jpg";

const imageAltText = "light pink and light blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Alpha MLSA | BE Software Engineer 25'👨‍🎓 | C/C++, Java Programmer | Linux User | IT Technical | Qt Developer | Still Learning and Exploring, Am not expert in all of these, but curious to explore more❤️🔥.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C++, Java Developer",
  "Linux User",
  "Alpha MLSA",
  "BE Software Engineer 25'👨‍🎓",
  "HTML CSS Javascript",
  "It Technical",
  "Qt Developer",
  "Self Learner",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I thrive on solving problems through fresh and creative avenues to inspire innovation. With my background in programming, I'm on a perpetual quest to discover novel and enhanced means of making technology inclusive for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
