import { twMerge } from "tailwind-merge";

export default function Spacer({ top }) {
  return (
    <div
      className={twMerge(
        "bg-gradient-to-b flex justify-center p-48",
        top ? "from-white to-sand-200" : "from-sand-200 to-white"
      )}
    >
      <div className="pt-10"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-28"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
        />
      </svg>
    </div>
  );
}
