import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
};

const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera/Stanford',
    issuedDate: '2023',
    link: 'https://coursera.org/verify/ML123',
    iconName: 'coursera',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    issuedDate: '2022',
    link: 'https://udemy.com/certificate/FSWD456',
    iconName: 'udemy',
  },
  {
    title: 'IEEE Xtreme Programming',
    issuer: 'IEEE',
    issuedDate: '2021',
    link: 'https://ieeextreme.org/certificate/789',
    iconName: 'ieee',
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
