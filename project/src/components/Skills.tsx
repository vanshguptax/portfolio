import React, { useEffect } from 'react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 82 },
  { name: 'AWS', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'GraphQL', level: 78 },
  { name: 'MongoDB', level: 85 },
  { name: 'Redux', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'TailwindCSS', level: 90 },
  { name: 'PostgreSQL', level: 82 },
  { name: 'Git', level: 88 },
  { name: 'REST APIs', level: 92 },
  { name: 'Jest', level: 80 }
];

export function Skills() {
  useEffect(() => {
    const sphereContainer = document.getElementById('skills-sphere');
    if (!sphereContainer) return;

    const radius = Math.min(sphereContainer.offsetWidth, 500) / 2;
    const tags = sphereContainer.getElementsByClassName('skill-tag');
    const total = tags.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    Array.from(tags).forEach((tag, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const htmlTag = tag as HTMLElement;
      htmlTag.style.transform = `translate3d(${x * radius}px, ${y * radius}px, ${z * radius}px)`;
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          <div
            id="skills-sphere"
            className="relative w-full max-w-[500px] h-[500px] transform-style-3d animate-rotate-3d"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:text-blue-600"
                style={{
                  fontSize: `${Math.max(14, (skill.level / 100) * 20)}px`,
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}