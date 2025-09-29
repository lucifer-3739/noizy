import LaserFlow from "../LaserFlow";
import Particles from "../Particles";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative dark:bg-black">
      {/* <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  /> */}
      {/* Laser Background */}
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={-0.5}
        color="#7C3AED"
      />

      {/* Text Section */}
      <div className="absolute top-36 left-20 max-w-3xl flex flex-col gap-4 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold select-none font-geistMono drop-shadow-[0_3px_12px_#7C3AED]">
          Feel the Beat
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-[0_1.5px_8px_#DFFF0080]">
          Discover tracks, explore genres & vibe with the best.
        </p>
        <span className="text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-[0_1.5px_8px_#DFFF0080]">
          Where music meets energy.
        </span>

        {/* CTA Button */}
        <button className="mt-6 w-fit px-10 py-4 rounded-full text-[#7C3AED] font-bold uppercase tracking-wide border-2 border-[#7C3AED] transition-all duration-500 hover:text-white hover:bg-[#7C3AED] hover:shadow-[0_0_20px_#7C3AED]">
          Start Listening
        </button>
        <div className="flex gap-6 mt-6 text-gray-300 text-sm md:text-base">
          <span>🎵 10k+ Tracks</span>
          <span>🌍 500+ Genres</span>
          <span>🔥 Trending Daily</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
