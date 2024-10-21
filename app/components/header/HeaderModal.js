export default function HeaderModal({ toggleSlideOver }) {
  return (
    <div className="sticky top-20 z-20 font-courier">
      <div
        id="slideover-container"
        className="h-full w-full inset-y-20 invisible"
      >
        <div
          id="slideover-bg"
          className="absolute -inset-y-[5.1rem] lg:hidden h-screen w-full bg-black-900 duration-500 ease-out transition-all opacity-0"
          onClick={toggleSlideOver}
        ></div>
        <div
          id="slideover"
          className="absolute flex flex-col w-full overflow-hidden items-center pt-8 pb-10 px-10 gap-y-4 text-base border-b-[1px] border-black bg-sand-100 duration-500 ease-out transition-all z-10 -translate-y-[125%]"
        >
          <a href="/" onClick={toggleSlideOver}>
            Home
          </a>
          <div className="w-[75%] md:w-[40%] border-b-[1px] border-black-700"></div>
          <a href="/about" onClick={toggleSlideOver}>
            About
          </a>
          <div className="w-[75%] md:w-[40%] border-b-[1px] border-black-700"></div>
          <a href="/sample" onClick={toggleSlideOver}>
            Sample Query
          </a>
          <div className="w-[75%] md:w-[40%] border-b-[1px] border-black-700"></div>
          <a href="/feedback" onClick={toggleSlideOver}>
            Send Us Feedback!
          </a>
        </div>
      </div>
    </div>
  );
}
