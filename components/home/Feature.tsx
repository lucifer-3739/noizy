import React from "react";

// Enhanced content for each feature
// const features = [
//   {
//     tag: "New",
//     title: "Personalized Playlists",
//     desc: "AI-crafted playlists that adapt as your mood and taste change. Rediscover your vibes every day with music made for you.",
//     color: "from-[#7C3AED] to-[#42e1fc]",
//   },
//   {
//     tag: "Focus",
//     title: "Lightning Fast Streaming",
//     desc: "No more waiting. Enjoy seamless playback in uncompressed HD anywhere, anytime. Connect, play, and vibe instantly.",
//     color: "from-[#42e1fc] to-[#7C3AED]",
//   },
//   {
//     tag: "Global",
//     title: "Explore Worldwide Genres",
//     desc: "From K-pop to Afrobeat to Indie, unlock the world of music at your fingertips and follow global charts in real time.",
//     color: "from-[#fd5c63] to-[#fcae42]",
//   },
//   {
//     tag: "Exclusive",
//     title: "Early Access & Drops",
//     desc: "Be the first to stream exclusive album drops and singles from trending stars and rising artists. Stay ahead of the curve.",
//     color: "from-[#fcae42] to-[#fd5c63]",
//   }
// ];

// const Feature = () => (
//   <section className="relative w-full py-24 px-4 bg-gradient-to-br from-black via-[#18162a] to-[#222966]">
//     {/* Decorative blur shape */}
//     <div className="absolute top-32 right-16 w-96 h-96 bg-gradient-to-tr from-[#7C3AED80] to-transparent blur-3xl opacity-60 pointer-events-none z-0"></div>
//     {/* Subtle noise overlay */}
//     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none z-0"></div>
    
//     <div className="relative z-10 text-center mb-16">
//       <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#42e1fc] bg-clip-text text-transparent drop-shadow-[0_0_20px_#42e1fc44]">
//         Why Choose Sonic?
//       </h2>
//       <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg md:text-2xl backdrop-blur-2xl bg-[rgba(44,47,85,0.42)] rounded-xl px-8 py-4">
//         Your sound, your journey—experience the next level of music streaming.<br />
//         Join a community built for true music discovery and vibes.
//       </p>
//     </div>

//     {/* Multicolor gradient cards */}
//     <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
//       {features.map((feature, idx) => (
//         <div
//           key={idx}
//           className={`p-6 rounded-3xl shadow-xl bg-gradient-to-br ${feature.color} hover:scale-105 duration-300 transition 
//                       border-none relative overflow-hidden group`}
//         >
//           <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition" />
//           <span className="bg-white/20 text-white text-xs uppercase rounded-xl px-3 py-1 font-bold tracking-widest shadow mb-3 inline-block group-hover:bg-white/40 transition">
//             {feature.tag}
//           </span>
//           <h3 className="text-2xl font-bold mb-3 text-white drop-shadow">{feature.title}</h3>
//           <p className="text-base text-slate-100 min-h-[72px]">{feature.desc}</p>
//         </div>
//       ))}
//     </div>

//     {/* Modern call to action */}
//     <div className="relative z-10 mt-16 text-center">
//       <button className="px-9 py-4 bg-gradient-to-r from-[#7C3AED] via-[#42e1fc] to-[#7C3AED] rounded-full shadow-xl font-semibold text-lg text-white
//                          tracking-wider hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]">
//         Experience the Vibe →
//       </button>
//     </div>
//   </section>
// );

// export default Feature;
import { Card } from "@/components/ui/card"
import { Music, Disc3, Globe, Mic } from "lucide-react"
import { useState } from "react"

const features1 = [
  {
    icon: Music,
    title: "Discover New Music",
    description: "Explore millions of tracks from artists worldwide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Disc3,
    title: "Create Playlists",
    description: "Curate your perfect soundtrack for any moment",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Charts",
    description: "See what's trending around the world",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Mic,
    title: "Artists & Podcasts",
    description: "Follow your favorite creators and shows",
    color: "from-cyan-500 to-blue-500",
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features1.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 p-8 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 ${
                      hoveredIndex === index ? "rotate-[360deg] scale-110" : ""
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
