import React, { useEffect, useRef } from 'react';

interface Skill {
  icon: string;
  name: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
}

const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ skills }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);
  const currentSpeedRef = useRef(0.5);
  const targetSpeedRef = useRef(0.5);
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const animate = () => {
      currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.1;

      positionRef.current += currentSpeedRef.current;

      const contentWidth = marquee.scrollWidth / 4;
      if (positionRef.current >= contentWidth) {
        positionRef.current -= contentWidth;
      }

      marquee.style.transform = `translateX(${-positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    targetSpeedRef.current = 3;
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = 0.5;
  };

  return (
    <div
      className="w-full py-4 mt-12 overflow-hidden bg-background border-t border-b border-[#e2e8f0] dark:border-darkSkillBackground relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Левый fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-background to-transparent" />
      {/* Правый fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-background to-transparent" />
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center px-4 py-2 mr-4 bg-white dark:bg-darkSkillBackground rounded-full flex-shrink-0">
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 mr-2" />
            <span className="text-foreground text-sm font-satoshi">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee; 