import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";
import Blockquote from "./mdx-atoms/blockquote";
import MyLink from "./typography/MyLink";
import MyParagraph from "./typography/MyParagraph";

const components = {
  pre: ({ children }) => children, // Remove default pre wrapper
  hr: () => (
    <hr
      className="border-t-[1px] mt-3 mb-8"
      style={{ borderColor: "var(--color-divider)" }}
    />
  ),
  code: CodeBlock, // block-level code
  blockquote: Blockquote,
  h1: (props) => <h1 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-xl font-semibold mt-8 mb-4" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold mt-8 mb-4" {...props} />,
  a: (props) => <MyLink to={props.href} {...props} />,
  ul: (props) => <ul className="mb-6 pl-6 list-disc" {...props} />,
  li: (props) => <li className="my-2" {...props} />,
  p: (props) => <MyParagraph {...props} />,
};

const MDXLayout = ({ children }) => (
  <MDXProvider components={components}>
    <article className="prose prose-invert mx-auto p-0 ">{children}</article>
  </MDXProvider>
);

export default MDXLayout;
