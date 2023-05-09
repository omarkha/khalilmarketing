import React from "react";

const Blogpage = () => {
  return (
    <div className="blogpage">
      <div className="container bg-light">
        <div className="py-5">
          <h2>Omar Khalil's Blog</h2>
          <h3 className="text-dark">A Journey of Learning </h3>
        </div>
        <section className="blog-posts">
          <div className="popular-posts">
            <h3>Popular Posts</h3>
            <div className="post">
              <h3 className="text-warning">
                My Notes On Marcia Yudkins Course: Basic Concepts and Techniques
                for Copywriting
              </h3>
            </div>
            <div className="post">
              <h3 className="text-warning">
                My Notes On Conversion Copywriting 101 by Copyhackers
              </h3>
            </div>
            <div className="post">
              <h3 className="text-warning">
                My Notes On Kopywriting Korse by Neville Medhora
              </h3>
            </div>
            <div className="post">
              <h3 className="text-warning">
                My Notes On Tested Advertising Methods by John Caples
              </h3>
            </div>
          </div>
          <aside>
            <h3>Recent Posts</h3>
            <ul>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
              <li>Article</li>
            </ul>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Blogpage;
