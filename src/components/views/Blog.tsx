import React, { FC } from "react";

interface BlogProps {
  windowWidth: number;
}

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

const Blog: FC<BlogProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  return (
    <section id="about">
      <div
        className={`blog-content font-inter text-base text-left font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <br />
        <p className="indent-8">
          My blog is a collection of my thoughts and experiences as a computer
          science student at Rice University and as a software engineer. I write
          about technical topics ranging from theory and algorithms to software
          development and data science. I also explore potpourri topics such as
          information security, productivity, and personal development.
        </p>
        <div id="example-blog-posts" className="mt-5"></div>
        <br />
      </div>
      <div>
        <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
          <span className="text-white font-semibold text-base">
            <a href="/blog" rel="noopener noreferrer">
              Visit My Blog
            </a>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Blog;
