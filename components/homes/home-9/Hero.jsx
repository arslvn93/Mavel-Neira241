"use client";
import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="page-title home09 px-16">
      <div className="content d-flex justify-between">
        <div className="left">
          <div className="text-display title text_white split-text effect-left">
            Turning your Real Estate dreams into reality
          </div>
        </div>
        <div className="right">
          <p className="text-1 description split-text split-lines-rotation-x">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ultrices sapien dolor, non consequat risus feugiat eu. Quisque
            congue, nisi vel tincidunt suscipit,
          </p>
          <div className="img-wrap img-custom-anim-right">
            <Image
              className="lazyload"
              data-src="/images/page-title/thumbs-1.jpg"
              alt=""
              src="/images/page-title/thumbs-1.jpg"
              width={690}
              height={224}
            />
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="form-search style-2"
      >
        <fieldset>
          <input
            className=""
            type="text"
            placeholder="What to look for?"
            name="text"
            tabIndex={2}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
        <div className="icon">
          <svg
            width={18}
            height={19}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 17.0001C11.0511 17.0001 10.8603 16.9211 10.7197 16.7804C10.579 16.6398 10.5 16.449 10.5 16.2501V13.2501C10.5 13.1267 10.5304 13.0051 10.5887 12.8963C10.6469 12.7874 10.7311 12.6946 10.8337 12.6261L13.0837 11.1261C13.207 11.0439 13.3518 11 13.5 11C13.6482 11 13.793 11.0439 13.9163 11.1261L16.1663 12.6261C16.2689 12.6946 16.3531 12.7874 16.4113 12.8963C16.4696 13.0051 16.5 13.1267 16.5 13.2501V16.2501C16.5 16.449 16.421 16.6398 16.2803 16.7804C16.1397 16.9211 15.9489 17.0001 15.75 17.0001H11.25Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 8C13.5 6.4087 12.8679 4.88258 11.7426 3.75736C10.6174 2.63214 9.0913 2 7.5 2C5.9087 2 4.38258 2.63214 3.25736 3.75736C2.13214 4.88258 1.5 6.4087 1.5 8C1.5 11.7448 5.65425 15.6447 7.04925 16.8492C7.17928 16.9468 7.33747 16.9994 7.5 16.9993"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 17V14.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10.25C8.74264 10.25 9.75 9.24264 9.75 8C9.75 6.75736 8.74264 5.75 7.5 5.75C6.25736 5.75 5.25 6.75736 5.25 8C5.25 9.24264 6.25736 10.25 7.5 10.25Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="button-submit">
          <button className="tf-btn pd-26 bg-color-primary pd-15" type="submit">
            <span className="md-hide">Search property</span>
            <i className="icon-MagnifyingGlass" />
          </button>
        </div>
      </form>
      <div className="thumbs-main">
        <Image
          className="lazyload parallax-img"
          data-src="/images/page-title/thumbs-main-7.jpg"
          alt=""
          src="/images/page-title/thumbs-main-7.jpg"
          width={1888}
          height={522}
        />
      </div>
    </div>
  );
}
