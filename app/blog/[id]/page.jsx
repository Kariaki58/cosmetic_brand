"use client";

import { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import skincare4 from '@/app/assets/skincare4.jpg';
import skincare5 from '@/app/assets/skincare5.jpg';
import Ads from "@/app/components/Ads";
import Nav from "@/app/components/Nav";
import Footer from '@/app/components/Footer';
import brand from "@/app/assets/brand.png";
import { IoChevronForwardOutline } from "react-icons/io5";


// Example dynamic blog post list
const blogPosts = [
  {
    id: 1,
    title: 'The Best Skincare Routine for Fall',
    image: skincare4,
    date: 'October 5, 2023',
    content: 'Here is a full article about the best skincare routine you can follow during fall...',
    comments: [
      {
        id: 1,
        name: 'Sarah',
        comment: 'I love this article, so helpful!',
        reply: 'Thank you Sarah! We’re glad you found it useful.',
      },
    ],
  },
  // Add more blog posts here...
];

// Example recent posts and categories for the sidebar
const recentPosts = [
  { title: 'Why Sunscreen is a Year-Round Must', date: 'August 23, 2023', image: skincare5 },
  { title: 'How to Layer Your Skincare Products', date: 'July 18, 2023', image: skincare5 },
];

const blogCategories = [
  { name: 'Lifestyle', count: 6 },
  { name: 'Health & Wellness', count: 4 },
  { name: 'Skincare Tips', count: 8 },
  { name: 'Travel', count: 3 },
];

const BlogPostPage = ({ params }) => {
  const [commentData, setCommentData] = useState({ name: '', email: '', comment: '' });
  const [comments, setComments] = useState(blogPosts[0].comments);
  const postId = parseInt(params.id);
  const blogPost = blogPosts.find((post) => post.id === postId);
  
  if (!blogPost) return <p>Post not found</p>;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = { ...commentData, id: comments.length + 1 };
    setComments([...comments, newComment]);
    setCommentData({ name: '', email: '', comment: '' });
  };

  return (
    <div>
      <Ads />
      <Nav />
      <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${brand.src})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Shop</h2>
        <div className="flex items-center text-lg">
          <p>Beautifo</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Blog</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Tips & procedure to apply luxury beauty cosmetic cream</p>
        </div>
      </header>
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Blog Categories</h2>
            <ul className="space-y-4">
              {blogCategories.map((category, index) => (
                <li key={index} className="flex justify-between items-center cursor-pointer hover:text-[#FA9090]">
                  <div className="flex items-center gap-2">
                    <IoIosArrowRoundForward />
                    <p>{category.name}</p>
                  </div>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Recent Posts</h2>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center gap-4">
                  <Image src={post.image} alt={post.title} className="rounded-md w-16 h-16 object-cover" />
                  <div>
                    <p className="font-medium hover:underline cursor-pointer hover:text-[#FA9090]">{post.title}</p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <section className="">
          <article>
            <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
            <Image src={blogPost.image} alt={blogPost.title} className="rounded-md object-cover w-full h-auto" />
            <p className="mt-4 text-gray-500">{blogPost.date}</p>
            <p className="mt-6 text-lg text-gray-700">{blogPost.content}</p>
          </article>

          {/* Post Navigation */}
          <div className="flex justify-between my-8">
            <button className="text-blue-600 hover:underline">Previous Post</button>
            <button className="text-blue-600 hover:underline">Next Post</button>
          </div>

          {/* Comment Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <ul className="space-y-4 mb-8">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-gray-700 mt-1">{comment.comment}</p>
                  {comment.reply && (
                    <p className="ml-4 mt-2 text-sm text-gray-600">
                      <strong>Reply:</strong> {comment.reply}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4">Leave a Comment</h2>
            <form onSubmit={handleCommentSubmit}>
              <div className='grid grid-cols-2 gap-5'>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={commentData.name}
                    onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                    className="w-full border border-gray-300 p-3 rounded-full outline-none focus:border-[#FA9090]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={commentData.email}
                    onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                    className="w-full border border-gray-300 p-3 rounded-full outline-none focus:border-[#FA9090]"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Comment"
                  value={commentData.comment}
                  onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                  className="w-full border border-gray-300  px-2 py-3 rounded-xl outline-none focus:border-[#FA9090] h-32"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-black text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#FA9090] hover:scale-105 hover:shadow-lg"
              >
                Add Comment
              </button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
