/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-cpu.jpg";

const imageAltText = "cpu cool technology image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Number System Converter with Big Numbers Handling GUI Qt",
    description:
      "This is a project I have worked on in the past, Now I have converted it into GUI. This is a number system converter, with some extra powers of big numbers handling, I have made some functions that are able to perform arithmetic operations on big numbers, Which means you can perform any conversion, and there is no limit to conversions.",
    url: "https://github.com/NazakatUmrani/Number-System-Converter-with-Big-Numbers-Handling-GUI-Qt",
  },
  {
    title: "Simple Notepad GUI Qt",
    description:
      "This is a GUI Notepad app made in c++ with the help of the Qt Framework, I am currently working on it and adding some fruitful features. This project is for my practice on Qt, as I have started learning the Qt framework for GUI in c++.",
    url: "https://github.com/NazakatUmrani/Simple-Notepad-GUI-Qt",
  },
  {
    title: "Guessing Game Qt",
    description:
      "A guessing game, which generates a randome sequence of highlights, which follows highlighting circles with showing emoji, after highlight has completed, a user now need to repeat that highlight, after succesfull input from user, this game verifies the user's entered sequence with computer's, and if user entered correct then level is increased and +1 circles are highlighted than previous one, and again user enters sequence until and unless user enters wrong sequence.",
    url: "https://github.com/nazakatumrani/guessing-game-qt",
  },
  {
    title: "Guessing Game in Java",
    description:
      "This is a guessing game made in Java, which I made while doing a course on Coursera.",
    url: "https://github.com/nazakatumrani/guessing-game-in-java",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
