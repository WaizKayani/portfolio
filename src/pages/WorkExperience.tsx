import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon, FaGithub } from 'react-icons/fa';
import './WorkExperience.css';

const timelineData = [
  {
    timelineType: 'work',
    name: 'Kiani ATM Solutions LLC',
    title: 'Founder & Web Developer',
    techStack: 'HTML, CSS, JavaScript, GitHub',
    summaryPoints: [
      'Founded an ATM company in 2024, entering the $25B+ ATM market projected to grow at a 3.6% CAGR through 2030.',
      'Built and deployed the company website using HTML, CSS, JavaScript, and GitHub, strengthening the online presence.',
      'Analyzed transaction data to refine machine placement and maximize profitability across current and future partner sites.',
      'Established and manage revenue-sharing models with small businesses, enabling passive income and 2X projected growth.'
    ],
    dateRange: '05/2024–Present',
    github: 'https://waizkayani.github.io/kianiatmsolutions/',
  },
  {
    timelineType: 'work',
    name: 'Apple Inc.',
    title: 'Specialist',
    techStack: 'Apple Retail, Customer Experience',
    summaryPoints: [
      'Recognized company-wide for generating 200+ business customer introductions, driving a 30% increase in enterprise outreach.',
      'Stayed up to date with the latest Apple technologies and educated 100+ customers weekly to drive informed purchases.',
      'Resolved technical and service issues swiftly, reducing resolution time by 35% and improving NPS scores.',
      'Delivered 5+ Apple Vision Pro and Apple Intelligence demos daily, increasing interest in new product adoption.'
    ],
    dateRange: '08/2024–Present',
  },
  {
    timelineType: 'work',
    name: 'FirstEnergy Corporate',
    title: 'IT Intern',
    techStack: 'Java, Bash, Python, SQL, Oracle, MySQL, Azure',
    summaryPoints: [
      'Built and maintain a .NET-based API health checker and logging framework, monitoring service uptime for 10,000+ users.',
      'Developed internal CLI tools in Java for system diagnostics and log parsing, decreasing manual debugging time by 40%.',
      'Automated cross-platform patching operations using Bash and Python scripts on Unix/Linux environments, increasing system uptime by 15% across 500+ nodes by streamlining update workflows and ensuring consistent configuration management.',
      'Refactored and optimize SQL queries across Oracle, MySQL, and Azure SQL databases, cutting load times by 25%, improving overall responsiveness and reliability of enterprise applications used by over 8,000 employees.'
    ],
    dateRange: '05/2025–Present',
  },
  {
    timelineType: 'education',
    name: 'The Ohio State University',
    title: 'Bachelor of Science, Computer Science and Information',
    techStack: '',
    summaryPoints: [
      'Specializing in Artificial Intelligence. Expected Graduation: 05/2027.'
    ],
    dateRange: '2024–2027',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen py-16 bg-netflix-black">
      <div className="timeline-container mb-8">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-shadow text-center">Work Experience & Education</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === 'work'
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === 'work'
                ? { borderRight: '7px solid rgb(33, 150, 243)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === 'work'
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title font-bold text-lg">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold">{item.name}</h4>
              {item.techStack && <p className="vertical-timeline-element-tech text-sm mb-2">🔧 {item.techStack}</p>}
              <ul className="list-disc ml-5 mb-2">
                {item.summaryPoints.map((point, i) => (
                  <li key={i} className="mb-1 text-sm">{point}</li>
                ))}
              </ul>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 netflix-button mt-2"
                >
                  <FaGithub /> View Website
                </a>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
