// src/script/generate-rss.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import blogPosts from '../data/BlogPosts.data.js'; 

  
const PostsData = blogPosts;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the site URL for linking
const siteUrl = "http://localhost:5173/";

// Generate the RSS items
const rssItemsXml = PostsData.map(post => `
  <item>
    <title>${post.title}</title>
    <link>${siteUrl}/posts/${post.slug}</link>
    <guid>${siteUrl}/posts/${post.slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description><![CDATA[${post.description}]]></description>
  </item>
`).join("");

// Create the full RSS XML content
const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Aung Hein Thant Blog</title>
    <link>${siteUrl}</link>
    <description>Latest posts by Aung Hein Thant</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItemsXml}
  </channel>
</rss>`;

// Define the output path to save the feed
const outputPath = path.join(__dirname, "../../public/feed.xml");

// Write the RSS feed XML to the public directory
console.log(rssXml);  // Add this line to log the generated RSS XML
fs.writeFileSync(outputPath, rssXml);
console.log("✅ RSS feed generated at public/feed.xml");
