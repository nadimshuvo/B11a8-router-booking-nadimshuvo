import React, { useEffect, useState } from 'react';
import SingleBlogs from "../../components/SingleBlogs/SingleBlogs";
import Spinner from '../../components/Spinner/Spinner';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <section className="bg-white p-24">
      <div className="max-w-[1300px] mx-auto px-2.5">
        <div className="section-title text-center">
          <h2 className="plus-jakarta-sans-extrabold text-[40px] leading-[50px] text-[#0F0F0F] mb-4">
            Blogs
          </h2>
          <p className="plus-jakarta-sans-regular text-[16px] leading-[26px] text-[#0F0F0F]">
            Let's explore some basic concept that will make you a good developer
          </p>
        </div>

        <div className="mt-10">
          {loading ? (
            <Spinner />
          ) : (
            blogs.map((blog) => (
              <SingleBlogs key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
