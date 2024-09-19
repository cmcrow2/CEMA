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
      <div className="top-0 sticky inset-0 z-50 h-full pointer-events-auto">
        <div className="flex justify-between border-b-[1px] border-black text-black py-2 px-4 md:py-4 md:px-8 bg-white">
          <div className="flex gap-x-10 items-center text-lg">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">C.E.M.A.</div>
              <div className="text-xs">Civil Engineering</div>
              <div className="text-xs">Manual Assistant</div>
            </div>
            <div className="hidden md:flex hover:text-pink">Who We Are</div>
            <div className="hidden md:flex hover:text-pink">Sample Query</div>
          </div>
          <div className="flex items-center text-lg">
            <div className="hidden md:flex hover:text-pink">
              Send Us Feedback!
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 md:hidden"
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
