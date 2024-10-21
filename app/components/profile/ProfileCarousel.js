import teamMembers from "@/utils/team";
import ProfileCard from "@/app/components/profile/ProfileCard";
import { Carousel, IconButton } from "@material-tailwind/react";

export default function ProfileCarousel() {
  const profileCards = teamMembers.map((member) => {
    return (
      <ProfileCard
        key={member.name}
        name={member.name}
        image={member.profilePic}
        role={member.role}
        linkedin={member.linkedin}
        github={member.github}
      ></ProfileCard>
    );
  });

  return (
    <>
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        className="py-10 md:hidden"
        loop={true}
      >
        {profileCards}
      </Carousel>
      <div className="hidden md:flex flex-row pt-10 gap-x-4 overflow-x-scroll pb-10">
        {profileCards}
      </div>
    </>
  );
}
