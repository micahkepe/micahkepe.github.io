import React, { FC, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BlogPostComponent from "../generic/BlogPostComponent";
import { BlogPost } from "../../types";
import { BlogProps } from "../../types";

const Blog: FC<BlogProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://micahkepe.com/blog/atom.xml");
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const entries = xmlDoc.getElementsByTagName("entry");
        const posts = Array.from(entries).map((entry) => ({
          title: entry
            .getElementsByTagName("title")[0]
            .textContent.replace(/^\[\d+\]\s*/, ""),
          link: entry.getElementsByTagName("link")[0].getAttribute("href"),
          pubDate: entry.getElementsByTagName("published")[0].textContent,
          content: entry.getElementsByTagName("summary")[0].textContent,
        }));

        posts.sort((a, b) => {
          return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        });

        posts.splice(3);
        setBlogPosts(posts);
      } catch {
        return;
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section id="about">
      <div
        className={`blog-content text-base text-left font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <br />
        <p className="indent-8">
          My &quot;secret&quot; blog is a collection of my thoughts and
          experiences as a computer science student at Rice University and as a
          software engineer. I write about technical topics ranging from theory
          and algorithms to software development and data science. I also
          explore potpourri topics such as information security, productivity,
          and personal development. Here&apos;s some of my latest posts:
        </p>
        <br />
        <div id="latest-blog-posts" className="mt-2">
          {blogPosts.map((post) => (
            <BlogPostComponent key={post.link} post={post} />
          ))}
        </div>
        <br />
      </div>
      <motion.div
        onMouseEnter={() => controls.start({ x: 1, y: 0 })}
        onMouseLeave={() => controls.start({ x: 0, y: 0 })}
      >
        <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
          <span className="text-white font-semibold text-base">
            <a href="/blog/" rel="noopener noreferrer">
              Visit My Blog
            </a>
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            animate={controls}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
