import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs2 from "@/components/blogs/Blogs2";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

// Removed Breadcumb import
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
// Removed import for allBlogs from deleted data/blogs.js
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  // Note: Title could be made dynamic later by fetching blog data here too
  title: `Blog Post ${siteContent.metadata.baseTitleSuffix}`,
  description: `In-depth real estate articles and advice from ${siteContent.agent.name}, ${siteContent.agent.title}.`,
};
export default async function page({ params }) {
  const { id } = await params;

  // Use blog data from siteContent - find by ID
  // Note: This assumes IDs in siteContent.blog.posts match route params.
  // It also uses the first post as a fallback if ID not found.
  const blog = siteContent.blog.posts.find((p) => p.id == id) || siteContent.blog.posts[0];

  return (
    <>
      <div id="wrapper">
        <Header6 />
        <div className="main-content" style={{ paddingTop: '50px' }}>
          {/* Removed Breadcumb */}
          <BlogDetails blog={blog} />
          <RelatedBlogs currentBlogId={blog.id} />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}