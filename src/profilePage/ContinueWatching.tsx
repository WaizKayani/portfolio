import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/hobbies" },
    { title: "Future Career Plans", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/future-career-plans" },
    { title: "Music", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/music" },
    { title: "Favourite Shows of All Time", imgSrc: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", link: "/favourite-shows" },
    { title: "Favourite YouTubers", imgSrc: "https://picsum.photos/id/1031/300/200", link: "/favourite-youtubers" }
  ],
  developer: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/hobbies" },
    { title: "Future Career Plans", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/future-career-plans" },
    { title: "Music", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/music" },
    { title: "Favourite Shows of All Time", imgSrc: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", link: "/favourite-shows" },
    { title: "Favourite YouTubers", imgSrc: "https://picsum.photos/id/1031/300/200", link: "/favourite-youtubers" }
  ],
  stalker: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/hobbies" },
    { title: "Future Career Plans", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/future-career-plans" },
    { title: "Music", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/music" },
    { title: "Favourite Shows of All Time", imgSrc: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", link: "/favourite-shows" },
    { title: "Favourite YouTubers", imgSrc: "https://picsum.photos/id/1031/300/200", link: "/favourite-youtubers" }
  ],
  adventure: [
    { title: "Hobbies", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/hobbies" },
    { title: "Future Career Plans", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/future-career-plans" },
    { title: "Music", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/music" },
    { title: "Favourite Shows of All Time", imgSrc: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", link: "/favourite-shows" },
    { title: "Favourite YouTubers", imgSrc: "https://picsum.photos/id/1031/300/200", link: "/favourite-youtubers" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
