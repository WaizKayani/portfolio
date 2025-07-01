import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const bannerData = {
  headline: "Hi, I'm Waiz Kayani",
  resumeLink: { url: '/resume.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/waiz-k-713101227/',
  profileSummary: "A Computer Science student at The Ohio State University specializing in Artificial Intelligence. I've built at the intersection of innovation and impact through roles at Apple and FirstEnergy, and as the founder of Kiani ATM Solutions. From AI-powered media authentication to immersive spatial apps for Apple Vision Pro, I love creating technology that makes a difference. I'm currently seeking Summer 2026 Software Engineering internships where I can continue building scalable, user-centered solutions."
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
