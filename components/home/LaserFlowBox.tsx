import { useRef } from 'react';
import LaserFlow from '../LaserFlow';

const LaserFlowBoxExample: React.FC = () => {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const el = revealImgRef.current;
    if (el) {
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
    }
  };

  const handleMouseLeave = () => {
    const el = revealImgRef.current;
    if (el) {
      el.style.setProperty('--mx', '-9999px');
      el.style.setProperty('--my', '-9999px');
    }
  };

  return (
    <div
      className="
        relative overflow-hidden bg-[#060010]
        h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />
      <div
        className="
          absolute left-1/2 top-1/2
          w-[92%] sm:w-[88%] md:w-[86%] h-[44%] sm:h-[54%] md:h-[60%]
          -translate-x-1/2 -translate-y-1/2
          flex items-center justify-center
          bg-[#060010] border-2 border-[#FF79C6] rounded-2xl
          text-white text-base sm:text-xl lg:text-2xl
          z-[6]
        "
      >
        {/* Responsive content here */}
      </div>
      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        className="
          absolute w-full
          top-[-22%] sm:top-[-30%] md:top-[-40%] lg:top-[-50%]
          z-[5] pointer-events-none
        "
        style={{
          mixBlendMode: 'lighten',
          opacity: 0.3,
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage:
            'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage:
            'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />
    </div>
  );
};

export default LaserFlowBoxExample;
