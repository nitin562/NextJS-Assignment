import Cross from "./Utils/Cross";
import Dash from "./Utils/Dash";
import Feed from "./Utils/Feed";
import RatingComp from "./Utils/RatingComp";
import Star from "./Utils/Star";
import Thumbs from "./Utils/Thumbs";
import Traits from "./Utils/Traits";

export default function Home() {
  return (
    <div className="w-screen h-screen before:contents-[''] before:w-screen before:h-screen before:absolute before:top-0 before:left-0 before:bg-[url('../../public/Review.jpg')] before:bg-no-repeat before:bg-center before:bg-cover before:-z-10 bg-black/60 flex flex-col gap-y-10">
      <Cross />
      <div className="flex w-full pr-4 gap-x-1 items-center">
        <p className="text-white font-['Britannic'] p-1 px-3 text-3xl">
          Leave a review
        </p>
        <Dash BorderStyle="solid" />
      </div>
      <div className="w-full flex-1 flex flex-col gap-y-6 overflow-y-auto scrollbar px-3 ">
        <RatingComp
          title="Safety"
          description="How safe did you feel with Trausti?"
          subComp={<Star />}
        />
        <Dash BorderStyle="solid" />

        <RatingComp
          title="Communication"
          description="How easy was to communicate with Trausti?"
          subComp={<Star />}
        />
        <Dash BorderStyle="solid" />

        <RatingComp
          title="Would you recommend Trausti?"
          description="Your opinion won't be posted publicly"
          subComp={<Thumbs />}
        />
        <Dash BorderStyle="solid" />

        <RatingComp
          title="Praise"
          description="What traits best describe Trausti?"
          subComp={<Traits />}
        />
        <Dash BorderStyle="solid" />

        <RatingComp
          title="Care to share more?"
          description="How was your overall experience? What's that one thing that you won't forget Trausti for?"
          subComp={<Feed />}
          border={false}
        />
        <Dash BorderStyle="solid" />
        <button className="w-full md:w-fit hover:bg-pink-600 hover:text-white transition-all duration-300 text-md font-semibold p-2 self-end bg-green-400 mb-5">
          PUBLISH REVIEW
        </button>
      </div>
    </div>
  );
}
