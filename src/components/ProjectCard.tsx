import GlareHover from './GlareHover';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    animate?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, animate = false }) => {
    const isComingSoon = title === 'Coming Soon';
    const techColors: Record<string, string> = {
        'React': 'bg-[#222f3e] text-[#61dafb]',
        'TypeScript': 'bg-[#1a237e] text-[#3178c6]',
        'Tailwind CSS': 'bg-[#0e222b] text-[#38bdf8]',
        'Node.js': 'bg-[#1b2e1b] text-[#8cc84b]',
        'MongoDB': 'bg-[#1b2e1b] text-[#4db33d]',
        'Discord.js': 'bg-[#23272a] text-[#7289da]',
        'Framer Motion': 'bg-[#2d1a2e] text-[#e65cff]',
    };
    const cardContent = (
        <div className="relative p-3 sm:p-4">
            <h3 className="text-lg font-clashDisplay text-black dark:text-foreground mb-3">{title}</h3>
            <p className="text-[#252525] dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-satoshi leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-white text-highlightBlue dark:bg-[#191920] dark:text-[#00aaff] border border-[#e2e8f0] dark:border-[#333]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {link && (
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                />
            )}
        </div>
    );

    if (animate) {
        return (
            <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={800}
                background="white"
                darkBackground="#191920"
                borderRadius="8px"
                borderColor="#e2e8f0"
                darkBorderColor="#333"
                className="w-full sm:w-72 h-56 sm:h-64 transition-transform duration-300 hover:scale-105"
            >
                {cardContent}
            </GlareHover>
        );
    }
    return (
        <div className={`w-full sm:w-72 h-56 sm:h-64 bg-white dark:bg-[#131318] rounded-[8px] ${isComingSoon ? 'opacity-40 grayscale' : ''}`}>
            {cardContent}
        </div>
    );
};

export default ProjectCard; 