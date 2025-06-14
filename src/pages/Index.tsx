'use client'

import DecryptedText from '../components/DecryptedText';
import SkillsMarquee from '../components/SkillsMarquee';
import ShinyText from '../components/ShinyText';
import ProjectCard from '../components/ProjectCard';
import SpotlightCard from '../components/SpotlightCard';
import { ClipboardList, Layers, Laptop2, Hammer, Rocket, Github, Send } from 'lucide-react';
import '../index.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import SplitText from '../components/SplitText';
import LiquidChrome from '../components/LiquidChrome';
import { useModeAnimation } from 'react-theme-switch-animation';

const Index = () => {
  useEffect(() => {
    if (localStorage.getItem('theme-switch-mode') === null) {
      localStorage.setItem('theme-switch-mode', 'dark');
    }
  }, []);
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const [showMenu, setShowMenu] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const skills = [
    { icon: 'images/icons/typescript.svg', name: 'Typescript' },
    { icon: 'images/icons/javascript.svg', name: 'Javascript' },
    { icon: 'images/icons/react.svg', name: 'React' },
    { icon: 'images/icons/css.svg', name: 'CSS3' },
    { icon: 'images/icons/html.svg', name: 'HTML5' },
    { icon: 'images/icons/tailwind-css.svg', name: 'Tailwind CSS' },
    { icon: 'images/icons/nodejs.svg', name: 'Node.js' },
    { icon: 'images/icons/npm.svg', name: 'npm' },
    { icon: 'images/icons/figma.svg', name: 'Figma' },
    { icon: 'images/icons/git.svg', name: 'Git' },
    { icon: isDarkMode ? 'images/icons/github-light.svg' : 'images/icons/github-dark.svg', name: 'Github' },
    { icon: 'images/icons/linux.svg', name: 'Linux' },
    { icon: 'images/icons/postgresql.svg', name: 'PostgreSQL' },
    { icon: 'images/icons/vscode.svg', name: 'Visual Studio Code' },
    { icon: 'images/icons/supabase.svg', name: 'Supabase' },
    { icon: isDarkMode ? 'images/icons/nextjs-light.svg' : 'images/icons/nextjs-dark.svg', name: 'Next.js' },
    { icon: isDarkMode ? 'images/icons/express-light.svg' : 'images/icons/express-dark.svg', name: 'Express.js' },
  ];

  const handleScrollToProjects = () => {
    const section = document.getElementById('my-projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [navbarCompact, setNavbarCompact] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setNavbarCompact(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Show menu first
    const menuTimer = setTimeout(() => {
      setShowMenu(true);
    }, 800);

    // Then show content after menu appears
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(menuTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {/* Fixed Glassy Navbar */}
      <motion.nav 
        className={`fixed top-2 left-1/2 z-[100] -translate-x-1/2 w-full mx-auto px-4 py-2 flex items-center rounded-full backdrop-blur-md transition-all duration-300 ${navbarCompact ? 'max-w-xl' : 'max-w-4xl'}`}
        initial={{ opacity: 0, backgroundColor: isDarkMode ? 'rgba(8, 8, 8, 0)' : 'rgba(247, 248, 250, 0)' }}
        animate={{ 
          opacity: showMenu ? 1 : 0,
          backgroundColor: showMenu ? (isDarkMode ? 'rgba(8, 8, 8, 0.3)' : 'rgba(247, 248, 250, 0.8)') : (isDarkMode ? 'rgba(8, 8, 8, 0)' : 'rgba(247, 248, 250, 0)')
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Левая часть: Katana */}
        <span className="font-clashDisplay text-foreground text-base sm:text-lg flex-1 text-left truncate">Katana</span>
        {/* Центр: кнопки */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center min-w-0">
          <a
            href="#"
            className="px-3 py-1.5 rounded-full font-satoshi text-foreground hover:bg-black/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-highlightBlue flex items-center gap-2 text-sm sm:text-base"
          >
            <span className="w-2 h-2 rounded-full bg-highlightBlue mr-1"></span>
            Home
          </a>
          <button
            className="px-3 py-1.5 rounded-full font-satoshi text-muted-foreground cursor-not-allowed opacity-60 select-none flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
            disabled
          >
            <span className="w-2 h-2 rounded-full bg-transparent mr-1"></span>
            Coming Soon...
          </button>
        </div>
        {/* Правая часть: кнопка смены темы */}
        <div className="flex-1 flex justify-end min-w-0">
          <button 
            ref={ref}
            onClick={toggleSwitchTheme}
            className="p-2 rounded-full hover:bg-black/10 transition-all duration-200 text-base sm:text-lg"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      <motion.div
        className="min-h-screen bg-background flex flex-col items-center justify-start pt-16 sm:pt-20 relative"
        initial={{ opacity: 0, filter: 'blur(32px)' }}
        animate={{ 
          opacity: showContent ? 1 : 0,
          filter: showContent ? 'blur(0px)' : 'blur(32px)'
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Spacer for navbar height */}
        <div className="w-full h-[64px] md:h-[72px] lg:h-[80px]" />
        {/* Затемнение снизу экрана */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-50 bg-gradient-to-t from-black/60 to-transparent" />
        <main className="container mx-auto px-6 py-0 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Placeholder */}
          <div className="relative w-[220px] h-[320px] sm:w-[260px] sm:h-[380px] md:w-[300px] md:h-[450px] overflow-hidden flex-shrink-0 mx-auto md:mx-0">
            <img src="images/MePhoto.png" alt="Developer" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal text-foreground leading-tight font-clashDisplay">
              A <span className="text-highlightBlue">creative developer</span>
              <br />& digital designer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#252525] dark:text-gray-400 max-w-xl font-satoshi">
              <DecryptedText 
                text="I aim to collaborate with brands worldwide to create mission-driven websites that deliver real value and support business growth."
                animateOn="view"
                speed={30}
                sequential={true}
                revealDirection="start"
                characters="!@#$%^&*()_+-=[]{}|;:,.<>?/~`"
                className="text-[#252525] dark:text-gray-400"
                encryptedClassName="text-gray-600"
              />
            </p>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={handleScrollToProjects}
                className="group relative px-6 py-3 border border-foreground text-foreground rounded-full overflow-hidden transition-all duration-300 font-satoshi hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-300">My Projects</span>
                <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              <a
                href="https://github.com/katananame"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground bg-transparent rounded-full w-12 h-12 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-all duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/katananame"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground bg-transparent rounded-full w-12 h-12 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-all duration-200"
              >
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </main>
        <SkillsMarquee skills={skills} />

        {/* My Projects Section */}
        <section id="my-projects-section" className="container px-2 sm:px-6 py-8 sm:py-12 mt-8 sm:mt-12">
          <div className="text-highlightBlue text-base sm:text-lg font-clashDisplay mb-2 text-center md:text-left">
            <ShinyText text="{ PROJECT HISTORY }" speed={3} className="text-highlightBlue" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-normal text-foreground leading-tight font-clashDisplay text-center md:text-left">
            My Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525] dark:text-gray-400 max-w-xl font-satoshi leading-snug mb-8 sm:mb-12 text-center md:text-left">
            A collection of my recent work and personal projects<br/>showcasing my skills and creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-start">
            <ProjectCard
              title="Portfolio"
              description="A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a clean design."
              technologies={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
              link="https://github.com/katananame/portfolio"
              animate
            />
            <ProjectCard
              title="Trixyma Bot"
              description="A feature-rich Discord bot with moderation, music, and utility commands. Built with Discord.js and Node.js."
              technologies={['Node.js', 'Discord.js', 'Supabase', 'TypeScript']}
              link="https://github.com/katananame/trixyma-discord-bot"
              animate
            />
            <ProjectCard
              title="Coming Soon"
              description="New project coming soon. Stay tuned!"
              technologies={[]}
            />
            <ProjectCard
              title="Coming Soon"
              description="New project coming soon. Stay tuned!"
              technologies={[]}
            />
          </div>
        </section>

        {/* My Programming Process Section */}
        <section className="container px-2 sm:px-6 py-8 sm:py-12 mt-8 sm:mt-12">
          <div className="flex flex-col items-end">
            <div className="text-highlightBlue text-base sm:text-lg font-clashDisplay mb-2 text-center md:text-right w-full">
              <ShinyText text="{ PROCESS }" speed={3} className="text-highlightBlue" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-normal text-foreground leading-tight font-clashDisplay text-center md:text-right w-full">
              <SplitText
                text="My Programming Process"
                className="text-2xl sm:text-4xl md:text-6xl font-normal text-foreground leading-tight font-clashDisplay text-center md:text-right"
                delay={0}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="right"
              />
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#252525] dark:text-gray-400 max-w-xl font-satoshi leading-snug mb-8 sm:mb-12 text-center md:text-right w-full">
              Here I describe my approach to programming: from planning and design, through development and testing, to deployment and maintenance. My process is focused on clarity, efficiency, and delivering real value.
            </p>
          </div>
        </section>

        {/* Programming Process Cards Section */}
        <section className="container px-2 sm:px-6 pb-12 sm:pb-20">
          <div className="flex flex-col items-center md:flex-row md:flex-nowrap md:items-end justify-end gap-4">
            <SpotlightCard spotlightColor="#00aaff55" className="w-64 h-64 flex flex-col justify-center bg-white dark:bg-[#191920] border-none">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-highlightBlue flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-black dark:text-white"><span className="mr-2 text-black dark:text-white">01.</span>Define the Requirements</div>
                  <div className="text-[#252525] dark:text-gray-400 text-xs mt-1">Gather and clarify all project requirements and goals.</div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="#00aaff55" className="w-64 h-64 flex flex-col justify-center bg-white dark:bg-[#191920] border-none">
              <div className="flex items-center gap-3">
                <Layers className="w-8 h-8 text-highlightBlue flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-black dark:text-white"><span className="mr-2 text-black dark:text-white">02.</span>Design the Architecture</div>
                  <div className="text-[#252525] dark:text-gray-400 text-xs mt-1">Plan the structure, technologies, and flow of the application.</div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="#00aaff55" className="w-64 h-64 flex flex-col justify-center bg-white dark:bg-[#191920] border-none">
              <div className="flex items-center gap-3">
                <Laptop2 className="w-8 h-8 text-highlightBlue flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-black dark:text-white"><span className="mr-2 text-black dark:text-white">03.</span>Set Up the Development Environment</div>
                  <div className="text-[#252525] dark:text-gray-400 text-xs mt-1">Configure tools, repositories, and environments for coding.</div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="#00aaff55" className="w-64 h-64 flex flex-col justify-center bg-white dark:bg-[#191920] border-none">
              <div className="flex items-center gap-3">
                <Hammer className="w-8 h-8 text-highlightBlue flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-black dark:text-white"><span className="mr-2 text-black dark:text-white">04.</span>Implement Core Features</div>
                  <div className="text-[#252525] dark:text-gray-400 text-xs mt-1">Develop main functionality and user interface components.</div>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="#00aaff55" className="w-64 h-64 flex flex-col justify-center bg-white dark:bg-[#191920] border-none">
              <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-highlightBlue flex-shrink-0" />
                <div>
                  <div className="text-base font-bold text-black dark:text-white"><span className="mr-2 text-black dark:text-white">05.</span>Test, Debug, and Deploy</div>
                  <div className="text-[#252525] dark:text-gray-400 text-xs mt-1">Thoroughly test, fix bugs, and deploy the finished product.</div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Liquid Chrome Section */}
        <section className="container px-2 sm:px-6 pb-16 sm:pb-24 flex justify-center">
          <div className="w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-[#222] bg-[#18181c] flex items-center justify-center relative">
            <LiquidChrome
              baseColor={[0.0, 0.7, 1.0]}
              speed={1}
              amplitude={0.6}
              interactive={true}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="mb-4 px-4 py-2 flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md font-satoshi text-base md:text-lg tracking-wide uppercase" style={{ color: '#191920' }}>
                <span className="w-3 h-3 rounded-full bg-[#38bdf8] animate-pulse shadow-lg"></span>
                Available for work
              </span>
              <SplitText
                text="Let's create your next big idea."
                className="text-3xl md:text-5xl font-clashDisplay text-white drop-shadow-lg text-center px-4"
                delay={0}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>
        </section>

        {/* Footer & Contact */}
        <div className="w-full flex flex-col items-center justify-center mt-4 mb-8 gap-2 text-xs sm:text-base">
          <div className="text-gray-500 text-sm">© 2025 Katana. All rights reserved.</div>
          <div className="text-gray-500 text-base font-satoshi select-all">Contact me: <a href="mailto:katanawkastreams@gmail.com" className="underline">katanawkastreams@gmail.com</a></div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
 