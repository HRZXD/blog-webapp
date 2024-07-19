import React from "react";

function Navbar() {
  return (
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
              <a className="text-lg">Home</a>
            </li>
            <li>
              <a className="text-lg">Blogs</a>
            </li>
            <li>
              <a className="text-lg">Contact</a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Zen Zone Blog
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
            <a className="text-lg">Home</a>
          </li>
          <li>
            <a className="text-lg">Blogs</a>
          </li>
          <li>
            <a className="text-lg">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-lg">Admin</a>
      </div>
    </div>
  );
}

export default Navbar;
