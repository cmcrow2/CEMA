"use client";

import HeaderModal from "./HeaderModal";

export default function Header() {
  const toggleSlideOver = () => {
    if (typeof window !== "undefined") {
      document
        .getElementById("slideover-container")
        .classList.toggle("invisible");
      document.getElementById("slideover-bg").classList.toggle("opacity-0");
      document.getElementById("slideover-bg").classList.toggle("opacity-75");
      document
        .getElementById("slideover")
        .classList.toggle("-translate-y-[125%]");
    }
  };

  return (
    <>
      <div
        id="header"
        className="top-0 sticky inset-0 z-50 font-courier shadow-md"
      >
        <div className="flex justify-between border-b-[1px] border-black text-black py-2 px-4 lg:py-4 lg:px-36 bg-sand-100">
          <div className="flex gap-x-10 items-center">
            <a href="/" className="flex flex-col items-center">
              <div className="text-2xl font-major hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-black hover:via-blue-900 hover:to-black hover:animate-text hover:transition-all hover:delay-75">
                Askitect
              </div>
              <div className="text-xs">Civil Engineering</div>
              <div className="text-xs">Manual Assistant</div>
            </a>
            <a
              href="/about"
              className="hidden lg:flex hover:text-blue hover:transition-all hover:delay-75 hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              About
            </a>
            <a
              href="sample"
              className="hidden lg:flex hover:text-blue hover:transition-all hover:delay-75 hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Sample Query
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="/feedback"
              className="hidden lg:flex hover:text-blue hover:transition-all hover:delay-75 hover:underline hover:underline-offset-4 hover:decoration-black"
            >
              Send Us Feedback!
            </a>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 lg:hidden"
                onClick={() => {
                  toggleSlideOver();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <HeaderModal toggleSlideOver={toggleSlideOver}></HeaderModal>
    </>
  );
}
