import { IoArrowForward } from "react-icons/io5";
import profileImg1 from "../assets/profile1.jpeg";
import profileImg2 from "../assets/profile2.jpeg";
import heroImg from "../assets/hero-image.png";

import profileImg3 from "../assets/profile3.jpg";
function Hero() {
  return (
    <section className="flex min-h-screen fle-wrap items-center bg-emerald-950 text-orange-50">
      <div className="w-full p-8 md:w-1/2">
        <div className="mb-4 flex  space-x-2">
          <img
            src={profileImg1}
            alt="Team Member 1"
            className="h-12 w-12 rounded-full border-orange-50"
          />
          <img
            src={profileImg2}
            alt="Team Member 2"
            className="h-12 w-12 rounded-full border-orange-50"
          />
          <img
            src={profileImg3}
            alt="Team Member 3"
            className="h-12 w-12 rounded-full border-orange-50"
          />
        </div>
        <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
          We create impactful ads that
          <span className="text-orange-500">elevage</span> your brand .
        </h1>
        <button className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-3  hover:bg-emerald-800">
            <span>Know More</span>
            <IoArrowForward />
        </button>
      </div>

      <div className="w-full md:w-1/2 lg:p-8">
        <img
          src={heroImg}
          alt="Ad Agency"
          className="h-full w-full rounded-xl object-cover"
        />

      </div>
    </section>
  );
}

export default Hero;
