import React, { useEffect, useState } from "react";
import imgProfile from "../../img/Profile.jpg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Main() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await Axios.get(`${import.meta.env.VITE_KEY}/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-lg" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-lg" href="#blog">
                  Blogs
                </a>
              </li>
              <li>
                <a className="text-lg" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-ghost text-2xl"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Zen Zone Blog
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hi, Guys!</h3>
              <p className="py-4">
                I&apos;m Haris, owner blogs. I hope you enjoy with my blog.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg" href="#blog">
                Blogs
              </a>
            </li>
            <li>
              <a className="text-lg" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn text-lg" onClick={handleLoginClick}>
            Admin
          </button>
        </div>
      </div>
      <div id="home">
        <div className="flex flex-col h-96 my-auto items-center bgimg bg-cover mt-12">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost avatar w-72 h-72"
            >
              <div className="rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                <img alt="Tailwind CSS Navbar component" src={imgProfile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-72 p-4 shadow"
            >
              <li>
                <a
                  className="justify-between text-base"
                  href="https://www.instagram.com/_hr1pct/"
                  target="_blank"
                >
                  Instagram
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a
                  className="text-base"
                  href="https://github.com/HRZXD"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4">
            I&apos;m Haris, <q>I hope you enjoy my blog</q>
          </div>
        </div>
      </div>
      <div id="blog">
        <div className="contanier mb-36">
          <div className="diff aspect-[16/9] h-44">
            <div className="diff-item-1">
              <div className="bg-primary text-primary-content grid place-content-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black">
                BLOGS
              </div>
            </div>
            <div className="diff-item-2">
              <div className="bg-white grid place-content-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black">
                BLOGS
              </div>
            </div>
            <div className="w-128 diff-resizer"></div>
          </div>
          <div className="mt-24 flex flex-wrap justify-center gap-4">
            {blogs.map((blog) => (
              <div
                className="card card-compact bg-base-100 w-80 shadow-xl mb-4"
                key={blog._id}
              >
                <figure>
                  {blog.img && (
                    <img
                      src={`${import.meta.env.VITE_KEY}/image/${blog._id}`}
                      alt={blog.topic}
                      className="object-cover h-48 w-80"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.topic}</h2>
                  <p>{blog.story}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        document.getElementById(`${blog._id}`).showModal()
                      }
                    >
                      More
                    </button>
                    <dialog id={blog._id} className="modal">
                      <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Content</h3>
                        <p className="pt-2 text-base">Time: {blog.date}</p>
                        <p className="pt-2 text-base">{blog.detail}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact">
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-8 pb-16 inset-x-0 bottom-0">
          <nav>
            <div className="text-base font-bold mb-2">My Socials</div>
            <div className="grid grid-flow-col gap-4">
              <a
                className="mr-9 text-neutral-800 dark:text-neutral-200 btn btn-square"
                href="https://www.instagram.com/_hr1pct/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                className="text-neutral-800 dark:text-neutral-200 btn btn-circle"
                href="https://github.com/HRZXD"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Haris
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default Main;
