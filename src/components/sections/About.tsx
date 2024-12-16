import { FC } from "react";

/** View for the about section of the website. */
const About: FC = () => {
  return (
    <section id="about">
      <article className="about-content pt-0 sm:pt-8 text-base text-left font-thin text-slate ml-2 mr-2">
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
          , where I am dedicated to obtaining a Bachelor&apos;s in{" "}
          <a
            href="https://csweb.rice.edu/"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Computer Science
          </a>
          . Additionally, I have chosen to pursue a Minor in{" "}
          <a
            href="https://ga.rice.edu/programs-study/departments-programs/engineering/data-science/data-science-minor/"
            target="_blank"
            rel="noreferrer"
            className=" text-white hover:text-green"
          >
            Data Science{" "}
          </a>
          to complement my studies. Since I was a child, I have been captivated
          by puzzles and solving problems, and the world of computer science
          offers a vast amount of novel solutions for the problems of today and
          the future.
        </p>
        <br />
        <p className="indent-8">
          I aspire to acquire the necessary technical skills from Rice
          University to create significant and meaningful contributions that
          address the ever-growing issues in our interconnected world. With a
          relentless drive to continually push my boundaries, I am confident in
          my ability to make a positive impact.
        </p>
        <p className="indent-8"></p>
        <br />
        <p className="indent-8">
          Throughout my academic journey, I am excited about establishing
          connections with industry professionals, fellow students, and
          potential mentors. I believe that by engaging in thought-provoking
          discussions and exchanging ideas, we can collectively explore
          opportunities within the realms of computer science and data science.
          I am eager to participate in internships, research collaborations, and
          networking opportunities that will further enrich my skills and allow
          me to contribute to impactful projects.
        </p>
        <br />
        <p className="indent-8">
          Please feel free to reach out to me via email or connect with me on
          LinkedIn. I welcome any opportunity to connect and collaborate.
        </p>
      </article>
    </section>
  );
};

export default About;
