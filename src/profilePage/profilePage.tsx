import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { ProfileType } from '../types';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer', 'stalker', 'adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner profile={profile} />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
