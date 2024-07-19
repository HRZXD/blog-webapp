import React from "react";
import "./blogpage.css";

function BlogPage() {
  return (
    <div className="contanier mb-36">
      <div className="diff aspect-[16/9] h-44">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            BLOGS
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-white grid place-content-center text-9xl font-black">
            BLOGS
          </div>
        </div>
        <div className="w-128 diff-resizer"></div>
      </div>
      <div className="mt-24 flex justify-center">
        <div className="card card-compact bg-base-100 w-96 shadow-xl mr-14">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl mr-14">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl mr-14">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
