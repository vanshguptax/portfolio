import React from 'react';
import { Trophy, Users, Star, Award } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "Hackathon Winner",
    description: "First place in International Hackathon 2023",
    metric: "1st Place"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Team Leadership",
    description: "Led successful projects with cross-functional teams",
    metric: "15+ Projects"
  },
  {
    icon: <Star className="w-8 h-8 text-purple-500" />,
    title: "Open Source",
    description: "Contributed to major open source projects",
    metric: "500+ Commits"
  },
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    title: "Recognition",
    description: "Received industry recognition for innovations",
    metric: "5 Awards"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <span className="text-2xl font-bold text-blue-600">
                  {achievement.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}