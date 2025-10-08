import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"

const Feature = () => {

    useEffect(() => {
        // --- GSAP and Lenis Setup ---
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const lenis = new Lenis();
        
        // 1. Lenis requestAnimationFrame loop
        const raf = (time: number) => {
            lenis.raf(time * 1000);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
        // Lenis/ScrollTrigger interaction
        lenis.on("scroll", ScrollTrigger.update);
        
        // 2. Wrap animation creation in a function to ensure execution order
        const createAnimations = () => {
            
            // --- Animation Logic ---
            const titleHeadings = gsap.utils.toArray<HTMLElement>(".title-content h1");
            const splits: SplitText[] = [];

            titleHeadings.forEach((heading) => {
                const split = new SplitText(heading, { 
                    type: "chars",
                    charsClass: "char",
                });
                splits.push(split);

                // Set initial Y position for characters (top/bottom split)
                split.chars.forEach((char, j) => {
                    const charInitialY = j % 2 === 0 ? -150 : 150;
                    gsap.set(char, { y: charInitialY });
                });
            });

            const titles = gsap.utils.toArray<HTMLElement>(".title");

            titles.forEach((title, i) => {
                const titleContainer = title.querySelector(".title-content");
                
                // Initial X position logic: 1 & 3 from Left (-100), 2 from Right (100)
                const titleContainerInitialX = i === 1 ? 100 : -100;
                
                const split = splits[i];
                const charCount = split.chars.length;

                if (!split || !titleContainer) return;

                ScrollTrigger.create({
                    trigger: title,
                    start: "top bottom",
                    end: "top top", 
                    scrub: 1, 
                    
                    onUpdate: (self) => {
                        
                        // Container movement from initial X to 0 (center)
                        const titleContainerX = titleContainerInitialX * (1 - self.progress);
                        gsap.set(titleContainer, { x: `${titleContainerX}%` });

                        split.chars.forEach((char, j) => {
                            
                            let charIndex = j;
                            
                            // 3. FIX: Corrected the index used for the reverse stagger logic.
                            // The outer loop index (i) checks which title it is (1st, 2nd, or 3rd).
                            // The inner loop index (j) is used for the character's position.
                            if (i === 1) { 
                                charIndex = charCount - 1 - j;
                            }

                            // Simplified Staggered Progress Calculation
                            const staggerAmount = 0.5; // Controls how quickly the stagger finishes
                            const charStart = (charIndex / charCount) * staggerAmount;
                            
                            let charProgress = 0;
                            if (self.progress >= charStart) {
                                charProgress = Math.min(1, (self.progress - charStart) / (1 - staggerAmount));
                            }
                            
                            // Animate character Y from initialY to 0
                            const charInitialY = j % 2 === 0 ? -150 : 150;
                            const charY = charInitialY - charProgress * charInitialY;
                            
                            gsap.set(char, { y: charY });
                        })
                    }
                })
            });
        }

        // 2. Execute animation creation after a short delay to ensure DOM is ready and Lenis is initialized
        const animationTimeout = setTimeout(createAnimations, 100);

        // --- Cleanup function ---
        return () => {
             clearTimeout(animationTimeout);
             lenis.off("scroll", ScrollTrigger.update);
             ScrollTrigger.getAll().forEach(st => st.kill());
             // Note: SplitText instances are only in memory, no need to revert on unmount 
             // unless you want to put the original HTML back, which is handled by React unmounting.
        }

    }, []);

    // --- JSX (using classes and h-screen for full height) ---
    return (
        <div className="font-family: 'Manrope', sans-serif; p-4">
            <section className="relative w-full text-center content-center">
                
                {/* H1 #1 - Comes from Left */}
                <div className="title h-screen flex items-center overflow-hidden"> 
                    <div className="title-content relative w-full flex justify-center items-center will-change-transform bg-[#7C3AED] h-full">
                        {/* Use a high z-index and color for visibility */}
                        <h1 className="text-[10vw] font-extrabold text-white z-10">Discover New Music</h1> 
                    </div>
                </div>
                
                {/* H1 #2 - Comes from Right */}
                <div className="title h-screen flex items-center overflow-hidden">
                    <div className="title-content relative w-full flex justify-center items-center will-change-transform bg-[#b896f4] h-full">
                        <h1 className="text-[10vw] font-extrabold text-white z-10">Create Playlists</h1>
                    </div>
                </div>
                
                {/* H1 #3 - Comes from Left */}
                <div className="title h-screen flex items-center overflow-hidden">
                    <div className="title-content relative w-full flex justify-center items-center will-change-transform bg-[#7C3AED] h-full">
                        <h1 className="text-[10vw] font-extrabold text-white z-10">Artists & Podcasts</h1>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Feature