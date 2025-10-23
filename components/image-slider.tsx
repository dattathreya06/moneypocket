// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const slides = [
//   {
//     id: 1,
//     title: "Quick Approval",
//     description: "Get approved in minutes with our AI-powered verification",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     id: 2,
//     title: "Transparent Pricing",
//     description: "No hidden charges, see all fees upfront before applying",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     id: 3,
//     title: "Easy Management",
//     description: "Track your loan and make payments directly from the app",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     id: 4,
//     title: "Customer Support",
//     description: "24/7 support team ready to help you anytime",
//     color: "from-orange-500 to-red-500",
//   },
// ]

// export function ImageSlider() {
//   const [current, setCurrent] = useState(0)
//   const [autoPlay, setAutoPlay] = useState(true)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [autoPlay])

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % slides.length)
//     setAutoPlay(false)
//   }

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//     setAutoPlay(false)
//   }

//   return (
//     <section className="py-20 md:py-32 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">How Money Pocket Works</h2>

//         <div className="relative">
//           {/* Slider Container */}
//           <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute inset-0 transition-opacity duration-500 ${
//                   index === current ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <div
//                   className={`w-full h-full bg-gradient-to-br ${slide.color} flex flex-col items-center justify-center text-white p-8`}
//                 >
//                   <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">{slide.title}</h3>
//                   <p className="text-lg md:text-xl text-center opacity-90 max-w-md">{slide.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition"
//           >
//             <ChevronRight size={24} />
//           </button>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setCurrent(index)
//                   setAutoPlay(false)
//                 }}
//                 className={`h-2 rounded-full transition-all ${
//                   index === current ? "bg-primary w-8" : "bg-border w-2 hover:bg-primary/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images from your assets folder (adjust the path if needed)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";

const slides = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          How Money Pocket Works
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Image Container */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px] aspect-[9/19] overflow-hidden rounded-3xl shadow-xl border border-border bg-card">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={""}
                    fill
                    priority={index === 0}
                    className="object-contain"
                  />

                  {/* Optional overlay text (comment out if not needed) */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-4 text-center">
                <h3 className="text-base md:text-lg font-semibold mb-1">{slide.title}</h3>
                <p className="text-xs md:text-sm opacity-90">{slide.desc}</p>
              </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-border w-2 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
