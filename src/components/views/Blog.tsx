import React, { FC, useState, useEffect } from "react";

interface BlogProps {
  windowWidth: number;
}

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
}

const Blog: FC<BlogProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Fetch blog posts from the Atom feed of the Programming category
        const response = await fetch(
          "https://micahkepe.com/blog/categories/programming/atom.xml",
        );
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const entries = xmlDoc.getElementsByTagName("entry");
        const posts = Array.from(entries).map((entry) => ({
          title: entry
            .getElementsByTagName("title")[0]
            .textContent.replace(/^\[\d+\]\s*/, ""), // Remove post number prefix
          link: entry.getElementsByTagName("link")[0].getAttribute("href"),
          pubDate: entry.getElementsByTagName("published")[0].textContent,
          content: entry.getElementsByTagName("summary")[0].textContent,
        }));

        // Sort blog posts by publication date
        posts.sort((a, b) => {
          return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        });

        // Limit the number of blog posts to display (adjust as needed)
        posts.splice(3);
        setBlogPosts(posts);
      } catch (error) {
        return;
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section id="about">
      <div
        className={`blog-content font-inter text-base text-left font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <br />
        <p className="indent-8">
          My &quot;secret&quot; blog is a collection of my thoughts and
          experiences as a computer science student at Rice University and as a
          software engineer. I write about technical topics ranging from theory
          and algorithms to software development and data science. I also
          explore potpourri topics such as information security, productivity,
          and personal development. Here&apos;s the latest programming-related
          blog posts:
        </p>
        <br />
        <div id="latest-blog-posts" className="mt-2 ml-5">
          {blogPosts.map((post) => (
            <div
              key={post.link}
              className="mb-4 border-solid border-2 border-slate p-4 rounded-lg hover:bg-white/5"
            >
              <h3 className="text-sm text-white font-semibold mb-2">
                {post.title}
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">
                {new Date(post.pubDate).toLocaleDateString()}
              </p>
              <div
                className="mt-2 text-sm text-slate"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              <div className="flex justify-end">
                <a
                  href={post.link}
                  className="text-sm text-white hover:text-green decoration-green"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
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
