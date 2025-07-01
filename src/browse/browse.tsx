import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import professorImg from '../images/professor.jpg';
import willSmithImg from '../images/willsmith.jpg';
import bossBabyImg from '../images/bossbaby.jpg';
import johnCenaImg from '../images/johncena.jpg';
import netflixSound from '../netflix-sound.mp3';

const profiles = [
  {
    name: 'recruiter',
    image: professorImg,
    backgroundGif:
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif',
  },
  {
    name: 'developer',
    image: bossBabyImg,
    backgroundGif:
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif',
  },
  {
    name: 'stalker',
    image: willSmithImg,
    backgroundGif:
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif',
  },
  {
    name: 'adventurer',
    image: johnCenaImg,
    backgroundGif:
      'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif',
  },
];

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    // Play Netflix sound
    const audio = new Audio(netflixSound);
    audio.volume = 0.3; // Set volume to 30%
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    // Navigate after a short delay to let the sound play
    setTimeout(() => {
      navigate(`/profile/${profile.name}`, {
        state: { profileImage: profile.image, backgroundGif: profile.backgroundGif },
      });
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflix-black px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 text-shadow tracking-wide text-center">
        Who&apos;s Watching?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
