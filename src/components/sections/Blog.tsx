import React, { FC, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import BlogPostComponent, { IBlogPost } from "../content/BlogPostComponent";

/** View for the blog section of the website. */
const Blog: FC = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);
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
          title: entry.getElementsByTagName("title")[0].textContent,
          link: entry.getElementsByTagName("link")[0].getAttribute("href"),
          pubDate: entry.getElementsByTagName("published")[0].textContent,
          summary: entry.getElementsByTagName("summary")[0].textContent,
        }));

        posts.sort((a, b) => {
          return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        });
        // Only show the latest 3 blog posts
        posts.splice(3);
        setBlogPosts(posts);
      } catch (e) {
        console.error("Failed to fetch blog posts: ", e);
        return [];
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <section id="blog">
      <article className="blog-content pt-0 sm:pt-8 text-base text-left font-thin text-slate pr-8 pl-3">
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
        <section id="latest-blog-posts" className="mt-2">
          {blogPosts.map((post) => (
            <BlogPostComponent key={post.link} post={post} />
          ))}
        </section>
        <br />
      </article>
      <motion.div
        onMouseEnter={() => controls.start({ x: 1, y: 0 })}
        onMouseLeave={() => controls.start({ x: 0, y: 0 })}
      >
        <p className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
          <span className="text-white font-semibold text-base">
            <a href="https://micahkepe.com/blog/" rel="noopener noreferrer">
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
        </p>
      </motion.div>
    </section>
  );
};

export default Blog;
