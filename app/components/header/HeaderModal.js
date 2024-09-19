export default function HeaderModal({ toggleSlideOver }) {
  return (
    <div className="sticky top-20">
      <div
        id="slideover-container"
        className="h-full w-full inset-y-20 invisible"
      >
        <div
          id="slideover-bg"
          className="absolute h-screen w-full bg-black-900 duration-500 ease-out transition-all opacity-0"
          onClick={toggleSlideOver}
        ></div>
        <div
          id="slideover"
          className="absolute flex flex-col w-full overflow-hidden items-center pt-8 pb-10 px-10 gap-y-4 text-xl border-b-[1px] border-black bg-white duration-500 ease-out transition-all z-10 -translate-y-[125%]"
        >
          <button onClick={toggleSlideOver}>Home</button>
          <div className="w-full border-b-[1px] border-black"></div>
          <button onClick={toggleSlideOver}>Who We Are</button>
          <div className="w-full border-b-[1px] border-black"></div>
          <button onClick={toggleSlideOver}>Sample Query</button>
          <div className="w-full border-b-[1px] border-black"></div>
          <button onClick={toggleSlideOver}>Send Us Feedback!</button>
        </div>
      </div>
    </div>
  );
}
