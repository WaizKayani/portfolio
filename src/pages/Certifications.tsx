import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaBuilding, FaLaptopCode } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiAmazonaws } from 'react-icons/si';
import { Certification } from '../types';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'aws': <SiAmazonaws />,
  'jpmorgan': <FaBuilding />
};

const certifications: Certification[] = [
  {
    title: 'Introduction to Machine Learning on AWS',
    issuer: 'Amazon Web Services (AWS)',
    issuedDate: 'June, 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/TT978P9DECTP',
    iconName: 'aws',
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'J.P. Morgan',
    issuedDate: 'July, 2025',
    iconName: 'jpmorgan',
    link: '',
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => {
          const CardTag = cert.link ? 'a' : 'div';
          return (
            <CardTag
              {...(cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {})}
              key={index}
              className="certification-card"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="certification-content">
                <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
              {cert.link && (
                <div className="certification-link animated-icon">
                  <FaExternalLinkAlt />
                </div>
              )}
            </CardTag>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
