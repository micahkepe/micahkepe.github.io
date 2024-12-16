import React, { FC } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Interface for blog post
 * @interface BlogPost
 * @property {string} title - Title of the blog post
 * @property {string} link - Link to the blog post
 * @property {string} pubDate - Date the blog post was published
 * @property {string} summary - Teaser summary of the blog post
 */
export interface IBlogPost {
  title: string;
  link: string;
  pubDate: string;
  summary: string;
}

/**
 * Blog post component that displays a blog post with a title, publication date,
 * and summary.
 */
const BlogPostComponent: FC<{ post: IBlogPost }> = ({ post }) => {
  const controls = useAnimation();

  return (
    <article className="relative mb-5 border-solid border-2 border-slate p-4 rounded-lg hover:bg-white/5">
      <a
        href={post.link}
        className="flex items-center text-sm text-white font-semibold mb-2 hover:text-green"
        aria-label={`Read more about ${post.title}`}
        onMouseEnter={() => controls.start({ x: 1, y: -1 })}
        onMouseLeave={() => controls.start({ x: 0, y: 0 })}
      >
        <p className="flex">{post.title}</p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-1 hidden sm:block"
          animate={controls}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </motion.svg>
      </a>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 block sm:hidden absolute top-4 right-4 ml-4"
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </motion.svg>
      <p className="text-sm font-semibold text-gray-500 mb-4">
        {new Date(post.pubDate).toLocaleDateString("en-US", {
          timeZone: "UTC",
        })}
      </p>
      <p
        className="mt-2 text-sm text-slate"
        dangerouslySetInnerHTML={{ __html: post.summary }}
      ></p>
    </article>
  );
};

export default BlogPostComponent;
