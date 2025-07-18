import React from "react";
import "../FromTheBlog/BlogSection.css";
import ThemeButton from "../typography/ThemeButton";
import MySubHeading from "../typography/MySubHeading";
import BlogsData from "../../data/BlogPosts.data.js";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const posts = [...BlogsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest to oldest
    .slice(0, 3); // latest 3

  return (
    <section className="flex flex-col gap-6 " id="blog">
      <div className="flex flex-row justify-between items-center">
        <MySubHeading color="var(--color-orange)">Latest Blogs</MySubHeading>
        <div className="btn-container flex gap-[0.8rem]">
          <ThemeButton
            to="/feed.xml"
            title="RSS Feed"
            target="_blank"
            rel="noopener noreferrer"
            icon={
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z" />
              </svg>
            }
          >
            RSS Feed
          </ThemeButton>

          <ThemeButton
            to="/blog"
            title="View all"
            icon={
              <svg viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            }
          >
            View all
          </ThemeButton>
        </div>
      </div>

      <ol className="flex flex-col gap-2">
        {posts.map((post, index) => (
          <li key={index} className="block">
            <Link
              className="group relative no-underline p-2.5 mobile-lg:p-3 -mx-3 
             w-[calc(100%+1.5rem)] transition-colors 
             flex items-top gap-4 rounded-md 
             hover:bg-[var(--tint-bg)] blog-post"
              title={post.title}
              to={`blog/${post.slug}`}
              style={{
                "--tint": post.tint,
                "--tint-bg": `${post.tint.replace("rgb", "rgba").replace(")", ", 0.15)")}`,
                color: "var(--color-accent)",
                fontSize: "0.9rem",
                fontWeight: "300",
              }}
            >
              {/* IMAGE (Fixed size) */}
              <div
                className="overflow-hidden rounded-md w-24 h-18 
              flex-shrink-0 transition border border-transparent 
              group-hover:border-[rgba(138,180,248,var(--opacity-tint-border))]
              group-hover:drop-shadow-[0_1px_1px_var(--tint)]"
              >
                <img
                  alt={`Hero image for blog post "${post.title}"`}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-center w-full h-full 
                transition duration-200 group-hover:scale-110"
                  src={post.image}
                />
              </div>

              {/* TEXT (Flexible) */}
              <div className="flex flex-col flex-1 justify-between gap-1">
                <p
                  className="text-pretty line-clamp-2 leading-[1.6rem]
    group-hover:underline group-hover:decoration-primary-txt
    group-hover:decoration-2 group-hover:underline-offset-2
    transition-all duration-300 ease-in-out"
                  style={{
                    color: "var(--color-primary-txt)",
                    fontSize: ".9rem",
                    fontWeight: "300",
                  }}
                >
                  {post.title}
                </p>
                <p
                  className="text-2xs line-clamp-2 text-pretty"
                  style={{ color: "var(--color-secondary-txt)" }}
                >
                  {post.description}
                </p>
                <p
                  className="flex items-center gap-1.5 text-3xs 
                tabular-nums overflow-x-auto"
                  style={{
                    color: "var(--color-tertiary-txt)",
                    fontSize: "0.8rem",
                    fontWeight: "300",
                  }}
                >
                  <span>{post.date}</span>
                  <span className="font-bold" aria-hidden="true">
                    ·
                  </span>
                  <span>{post.readTime}</span>
                  <span className="font-bold" aria-hidden="true">
                    ·
                  </span>
                  <span>{post.views}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default BlogSection;
