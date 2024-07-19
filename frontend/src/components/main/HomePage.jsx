import React from "react";
import imgProfile from "../../img/Profile.jpg";
function HomePage() {
  return (
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
            <a className="justify-between text-base">
              Instagram
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a className="text-base">Github</a>
          </li>
        </ul>
      </div>
      <div className="text-2xl font-bold mt-4">
        I&apos;m Haris, <q>I hope you enjoy with my blog</q>
      </div>
    </div>
  );
}

export default HomePage;
