import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Camera } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <Github size={24} />,
    username: '@yourusername',
    color: 'hover:text-gray-800',
    embedUrl: 'https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=transparent'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: <Linkedin size={24} />,
    username: 'Your Name',
    color: 'hover:text-blue-600',
    embedHtml: '<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="yourusername" data-version="v1"></div>'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    icon: <Instagram size={24} />,
    username: '@yourusername',
    color: 'hover:text-pink-600',
    embedUrl: 'https://www.instagram.com/yourusername/embed'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <Twitter size={24} />,
    username: '@yourusername',
    color: 'hover:text-blue-400',
    embedHtml: '<a class="twitter-timeline" data-height="400" href="https://twitter.com/yourusername">Tweets by yourusername</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  }
];

export function SocialMedia() {
  return (
    <section id="social" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Social Presence</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`text-gray-600 transition-colors ${social.color}`}>
                      {social.icon}
                    </div>
                    <h3 className="font-semibold ml-2">{social.name}</h3>
                  </div>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    View Profile
                  </a>
                </div>
                <p className="text-gray-500">{social.username}</p>
              </div>
              <div className="h-[400px] bg-gray-50 p-4">
                {social.embedUrl && (
                  <iframe
                    src={social.embedUrl}
                    className="w-full h-full border-0"
                    title={`${social.name} Embed`}
                  />
                )}
                {social.embedHtml && (
                  <div
                    dangerouslySetInnerHTML={{ __html: social.embedHtml }}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}