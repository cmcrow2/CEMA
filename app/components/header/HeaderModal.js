export default function HeaderModal({ toggleSlideOver }) {
  return (
    <div className="sticky top-20">
      <div
        id="slideover-container"
        className="h-full w-full inset-y-20 invisible"
      >
        <div
          id="slideover-bg"
          className="absolute -inset-y-[5.1rem] md:hidden h-screen w-full bg-black-900 duration-500 ease-out transition-all opacity-0"
          onClick={toggleSlideOver}
        ></div>
        <div
          id="slideover"
          className="absolute flex flex-col w-full overflow-hidden items-center pt-8 pb-10 px-10 gap-y-4 text-xl border-b-[1px] border-black bg-mint duration-500 ease-out transition-all z-10 -translate-y-[125%]"
        >
          <a href="/" onClick={toggleSlideOver}>
            Home
          </a>
          <div className="w-[75%] border-b-[1px] border-black"></div>
          <a href="/about" onClick={toggleSlideOver}>
            About
          </a>
          <div className="w-[75%] border-b-[1px] border-black"></div>
          <a href="/sample" onClick={toggleSlideOver}>
            Sample Query
          </a>
          <div className="w-[75%] border-b-[1px] border-black"></div>
          <a href="/feedback" onClick={toggleSlideOver}>
            Send Us Feedback!
          </a>
        </div>
      </div>
    </div>
  );
}
