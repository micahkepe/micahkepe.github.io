import React from "react";

const About = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="about">
      <div
        className={`about-content font-inter text-base text-left font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <br />
        <p className="indent-8">
          I am a computer science student at{" "}
          <a
            href="https://www.niche.com/colleges/rice-university/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-green"
          >
            Rice University
          </a>
          , where I am pursuing a Bachelor of Science in{" "}
          <a
            href="https://csweb.rice.edu/"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Computer Science{" "}
          </a>
          with a Minor in{" "}
          <a
            href="https://ga.rice.edu/programs-study/departments-programs/engineering/data-science/data-science-minor/"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Data Science
          </a>
          . Since I was a child, I have loved puzzles and solving problems, and
          the world of computer science offers a vast amount of novel solutions
          for the problems of today and the future. It is my hope that with the
          technical skills I learn from Rice, alongside my drive to constantly
          push myself outside my limits, that I can create meaningful and
          impactful work that will help address issues in our increasingly
          interconnected world.
        </p>
        <br />
        <p className="indent-8">
          As I continue my academic journey, I am eager to connect with industry
          professionals, fellow students, and potential mentors to exchange
          ideas and explore opportunities in computer science and data science
          fields. I am open to internships, research collaborations, and
          networking opportunities to further enhance my skills and contribute
          to impactful projects. Please feel free to reach out to me via email
          or LinkedIn!
        </p>
      </div>
    </section>
  );
};

export default About;
