import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../components/MyBlogs/MyBlogs";
import MDXLayout from "../components/MDXLayout";
import { IoArrowBack, IoArrowUp } from "react-icons/io5";
import MyLink from "../components/typography/MyLink";
import MyParagraph from "../components/typography/MyParagraph";
import Footer from "../components/Footer/Footer";
import ActionButton from "../components/Molecules/ActionButton";
import ThemeButton from "../components/typography/ThemeButton";
import Loading from "../components/Shared/Loading";

const BlogPost = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const { slug } = useParams();
  const [mdxContent, setMdxContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const Content = await import(`../blogs/${slug}.mdx`);
        setMdxContent(
          <MDXLayout>
            <Content.default />
          </MDXLayout>
        );
      } catch (err) {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };

    if (post) {
      loadContent();
    } else {
      setError("Post not found");
      setLoading(false);
    }

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, post]);

  if (loading) {
    return <Loading />;
  }

  if (error || !post) {
    return <></>;
  }

  return (
    <div className="text-white mt-12">
      <figure
        className="overflow-hidden max-w-[calc(100vw_+_calc(100vw_-_100%))] absolute top-0 -left-[calc(100vw_-_100%)] -right-[calc(100vw_-_100%)] pointer-events-none blur transition saturate-125 opacity-40 dark:opacity-16"
        style={{
          height: "85vh",
          maxHeight: 384,
          width: "100vw",
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to_bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "var(--color-blog-image-gradient)",
          }}
        />
      </figure>

      <header className="mx-auto z-20 relative ">
        <div className="text-[0.9rem]">
          <MyLink
            to="/blog"
            title="Go back to blog posts list"
            underline={false}
            className="inline-flex items-center gap-1"
          >
            <IoArrowBack className="text-lg" />
            Back to blog posts
          </MyLink>
        </div>

        <h1 className="text-[25px] font-bold mt-6" style={{ color: post.tint }}>
          {post.title}
        </h1>

        <div className="mt-2">
          <MyParagraph color="var(--color-paragraph)">
            {post.description}
          </MyParagraph>
        </div>

        <div className="flex gap-4 text-gray-400 text-sm mt-2">
          <span>{post.date}</span>
          <span aria-hidden="true" className="font-bold">
            ·
          </span>
          <span>{post.readTime}</span>
          <span aria-hidden="true" className="font-bold">
            ·
          </span>
          <span>{post.views}</span>
        </div>
      </header>

      <div className="mt-10 text-[var(--color-paragraph)] text-[0.9rem] leading-[1.8rem]">
        <Suspense fallback={<div>Loading content...</div>}>
          {mdxContent}
        </Suspense>
      </div>

      <div className="actions-group mt-7">
        <div className="h-[1px] bg-[var(--color-divider)] mb-7"></div>
        <div className="flex flex-row gap-2">
          <ThemeButton
            icon={
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                className="fill-inherit size-5"
                aria-hidden="true"
              >
                <path
                  className="fill-current"
                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                ></path>
              </svg>
            }
            to={`https://github.com/aunghein-dev/portfolio/src/blogs/${slug}.mdx`}
            target="_blank"
          >
            <span className="ml-2">Edit on GitHub</span>
          </ThemeButton>
          <ActionButton title="Share this blog" url={window.location.href} />
        </div>
      </div>

      <div className="mt-7">
        <div className="h-[1px] bg-[var(--color-divider)] mb-7"></div>
        <div className="mb-7 ">
          <Footer />
        </div>
      </div>

      {showScrollToTop && (
        <button
          style={{
            bottom: "2rem",
            right: "calc((100vw - 630px) / 2)", // aligns to the right edge of the 700px body
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-50 p-3  bg-[var(--color-surface)] hover:bg-[var(--color-surface-variant)] rounded-md transition-all ease-in-out duration-200 text-[var(--color-accent)]"
          title="Scroll to top"
        >
          <IoArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BlogPost;
