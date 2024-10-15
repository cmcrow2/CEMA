"use client";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import Image from "next/image";
import civileng from "@/images/civileng.jpeg";
import ProfileCarousel from "../components/profile/ProfileCarousel";

export default function WhoWeAre() {
  // gsap.registerPlugin(ScrollTrigger);
  const [height, setHeight] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("header");
      setHeight(element.offsetHeight.toString());
    }
  }, [height]);

  const heightClass = `h-[calc(100vh-${height}px)]`;
  const xlHeightClass = `xl:h-[calc(100vh-${height}px)]`;

  return (
    <div
      className={twMerge(
        "snap-y snap-mandatory overflow-y-scroll text-base xl:text-lg",
        heightClass
      )}
    >
      <div className="flex flex-col xl:flex-row-reverse">
        <div className="xl:w-2/5">
          <Image
            src={civileng}
            alt="Civil Engineering"
            className={twMerge(
              "h-56 md:h-72 w-full sticky top-0 object-cover object-[right,0,bottom,35%]",
              xlHeightClass
            )}
            priority
          ></Image>
        </div>
        <div className="xl:w-3/5">
          {/* Who We Are Section */}
          <div
            className={`pt-6 px-4 pb-20 md:w-[75%] md:m-auto md:pt-32 md:pb-10 lg:pt-40 lg:overflow-scroll lg:snap-always lg:snap-center ${xlHeightClass} xl:w-[65%] xl:m-auto`}
          >
            <h1 className="text-3xl font-courier pb-2 lg:text-4xl xl:text-5xl xl:pb-4">
              Who We Are
            </h1>
            <hr className="border-black"></hr>
            <div className="flex flex-col pt-4 xl:pt-8 gap-y-4">
              <p>
                We are a small group of civil and software engineers, who were
                annoyed at having to flip through hundreds of pages of
                information overload to find the exact graph or equation we
                needed for a project.
              </p>
              <p>
                With AI advancing quicker than anyone would have thought, our
                engineers at Askitect came up with an idea to use this new
                technology to shorten the workload for every civil engineer.
              </p>
            </div>
            <div className="pt-6 flex flex-col gap-y-4 text-base md:flex-row md:gap-x-4 xl:pt-16">
              <button className="px-4 py-2 border-[0.5px] border-black hover:bg-blue-100 hover:transition-all rounded-md flex flex-row gap-x-2 items-center">
                Contact Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
              </button>
              <a
                href="/feedback"
                className="px-4 py-2 border-[0.5px] border-black hover:bg-blue-100 hover:transition-all rounded-md flex flex-row gap-x-2 items-center"
              >
                Send Us Feedback
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          {/* What We Do Section */}
          <div
            className={`pt-6 px-4 pb-20 md:w-[75%] md:m-auto md:pt-32 md:pb-10 lg:pt-40 lg:overflow-scroll lg:snap-always lg:snap-center ${xlHeightClass} xl:w-[65%] xl:m-auto`}
          >
            <h2 className="text-3xl font-courier pb-2 lg:text-4xl xl:text-5xl xl:pb-4">
              What We Do
            </h2>
            <hr className="border-black"></hr>
            <div className="flex flex-col pt-4 gap-y-4">
              <p className="pt-4">
                We are currently designing and building an AI to be a Civil
                Engineer&apos;s personal assistant.
              </p>
              <p>
                Once provided with any formal manual (like the American
                Institute of Steel Construction for example), our AI will be
                able to read, understand, and answer user questions about the
                document.
              </p>
              <p>
                Simply upload your manual, then ask your assistant any questions
                you have!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Team Section */}
      <div
        className={`px-4 pb-20 md:w-[75%] md:m-auto md:pt-32 md:pb-10 lg:overflow-scroll lg:snap-always lg:snap-center ${xlHeightClass}`}
      >
        <h2 className="text-3xl font-courier pb-2">Our Team</h2>
        <hr className="border-black"></hr>
        <ProfileCarousel></ProfileCarousel>
      </div>
      {/* Contact Us Section */}
      <div
        className={`pb-28 px-4 md:w-[75%] md:m-auto md:pt-32 md:pb-32 lg:snap-always lg:overflow-scroll lg:snap-center  lg:pt-40 xl:w-[50%] ${xlHeightClass} xl:m-auto`}
      >
        <h2 className="text-3xl font-courier pb-2 w-72 lg:w-[30rem] xl:text-5xl xl:pb-4">
          We&apos;d love to hear from you!
        </h2>
        <hr className="border-black"></hr>
        <div className="flex flex-col pt-4 gap-y-4">
          <p className="">
            If you like what you see, or have any constructive feedback for us,
            please take some time to fill out our{" "}
            <a href="/feedback" className="text-blue">
              form
            </a>
            !
          </p>
          <p className="">
            Since we are currently in the early stages of development, we are
            only working on this project part time. With your feedback, we would
            be able to move to working on this full time!
          </p>
        </div>
        <div className="pt-6 flex flex-col gap-y-4 text-base md:flex-row md:gap-x-4 xl:pt-16">
          <button className="px-4 py-2 border-[0.5px] border-black hover:bg-blue-100 hover:transition-all rounded-md flex flex-row gap-x-2 items-center">
            Contact Us
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
          </button>
          <a
            href="/feedback"
            className="px-4 py-2 border-[0.5px] border-black hover:bg-blue-100 hover:transition-all rounded-md flex flex-row gap-x-2 items-center"
          >
            Send Us Feedback
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
