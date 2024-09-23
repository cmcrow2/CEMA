import Image from "next/image";
import gears from "@/images/gears.svg";
import team from "@/images/team.svg";
import profile from "@/images/profile.svg";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col text-xl">
      <h1 className="text-3xl font-courier px-6 pt-10">Who We Are</h1>
      <hr className="m-4 border-black"></hr>
      <div className="px-6 pb-6">
        <p>
          We are a small group of civil and software engineers, who were annoyed
          at having to flip through hundreds of pages of information overload to
          find the exact graph or equation we needed for a project.
        </p>
        <p className="pt-4">
          With AI advancing quicker than anyone would have thought, our
          engineers at C.E.M.A. (&quot;see-muh&quot;) came up with an idea to
          use this new technology to steeply shorten the workload for every
          civil engineer.
        </p>
      </div>
      <div className="flex flex-row items-center gap-x-6 px-6 pb-14">
        <button className="bg-rose p-2 rounded-md text-mint">Contact Us</button>
        <a href="/feedback" className="bg-rose p-2 rounded-md text-mint">
          Send Us Feedback
        </a>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={gears}
          alt="Who we are"
          className="responsive w-[50%] h-[50%]"
          priority
        ></Image>
      </div>
      <h2 className="text-3xl font-courier px-6 pt-4">What We Do</h2>
      <hr className="m-4 border-black"></hr>
      <p className="px-6 pb-10">
        We are currently designing and building an AI to be a Civil
        Engineer&apos;s personal assistant. Once provided with any formal manual
        (like the American Institute of Steel Construction for example), our AI
        will be able to read, understand, and answer user questions about the
        document. Simply upload your manual, then ask your assistant any
        questions you have!
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={team}
          alt="Our team"
          className="responsive w-[75%] h-[75%] -my-10"
          priority
        ></Image>
      </div>
      <h2 className="text-3xl font-courier px-6">Our Team</h2>
      <hr className="m-4 border-black"></hr>
      <div className="px-6 flex flex-col justify-center items-center pt-8">
        <Image
          src={profile}
          alt="sample profile picture"
          className="w-[25%] h-[25%] rounded-full object-none"
        ></Image>
        <p className="pt-4">Cameron Crow</p>
        <p className="pb-8 px-10">[PLACEHOLDER] Quick facts about Cam</p>
        <Image
          src={profile}
          alt="sample profile picture"
          className="w-[25%] h-[25%] rounded-full object-none"
        ></Image>
        <p className="pt-4">Benjamin McKeig</p>
        <p className="px-10">[PLACEHOLDER] Quick facts about Ben</p>
      </div>
      <h2 className="text-3xl font-courier px-6 pt-20">
        We&apos;d love to hear from you!
      </h2>
      <hr className="m-4 border-black"></hr>
      <p className="px-6">
        If you like what you see, or have any constructive feedback for us,
        please take some time to fill out our{" "}
        <a
          href="/feedback"
          className="text-blue underline decoration-blue underline-offset-2"
        >
          form
        </a>
        !
      </p>
      <p className="px-6 pt-4 pb-10">
        Since we are currently in the early stages of development, we are only
        working on this project part time. With your feedback, we would be able
        to move to working on this full time!
      </p>
    </div>
  );
}
