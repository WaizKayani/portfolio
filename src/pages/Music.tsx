import React from 'react';
import './Music.css';



const favoriteSongs = [
  { 
    title: "God's Plan", 
    artist: "Drake", 
    youtubeUrl: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM&list=RDxpVfcZ0ZcFM&start_radio=1",
    thumbnail: "https://img.youtube.com/vi/xpVfcZ0ZcFM/maxresdefault.jpg"
  },
  { 
    title: "Highest in the Room", 
    artist: "Travis Scott", 
    youtubeUrl: "https://www.youtube.com/watch?v=tfSS1e3kYeo&list=RDtfSS1e3kYeo&start_radio=1",
    thumbnail: "https://img.youtube.com/vi/tfSS1e3kYeo/maxresdefault.jpg"
  },
  { 
    title: "Work", 
    artist: "Rihanna ft. Drake", 
    youtubeUrl: "https://www.youtube.com/watch?v=HL1UzIK-flA",
    thumbnail: "https://img.youtube.com/vi/HL1UzIK-flA/maxresdefault.jpg"
  }
];

const favoriteTraditionalSongs = [
  { 
    title: "Jatt Hunde Aa", 
    artist: "Prem Dhillon", 
    youtubeUrl: "https://www.youtube.com/watch?v=zhS8JqBrrio&list=RDzhS8JqBrrio&start_radio=1",
    thumbnail: "https://img.youtube.com/vi/zhS8JqBrrio/maxresdefault.jpg"
  },
  { 
    title: "GOAT", 
    artist: "Diljit Dosanjh", 
    youtubeUrl: "https://www.youtube.com/watch?v=cl0a3i2wFcc&list=RDcl0a3i2wFcc&start_radio=1",
    thumbnail: "https://img.youtube.com/vi/cl0a3i2wFcc/maxresdefault.jpg"
  },
  { 
    title: "Aam Jahe Munde", 
    artist: "Parmish Verma", 
    youtubeUrl: "https://www.youtube.com/watch?v=muds1gFUTN8&list=RDmuds1gFUTN8&start_radio=1",
    thumbnail: "https://img.youtube.com/vi/muds1gFUTN8/maxresdefault.jpg"
  }
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>"Music is to the soul what words are to the mind" 🎵</p>
      </div>



      <div className="albums-section">
        <h3>Favorite Songs</h3>
        <div className="albums">
          {favoriteSongs.map((song, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={song.thumbnail} alt={song.title} className="album-image" />
              <div className="album-details">
                <h4>{song.title}</h4>
                <p>by {song.artist}</p>
                <a 
                  href={song.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="youtube-link"
                >
                  Watch on YouTube 🎥
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="traditional-section">
        <h3>Favourite Traditional Songs</h3>
        <div className="traditional-songs">
          {favoriteTraditionalSongs.map((song, index) => (
            <div key={index} className="traditional-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={song.thumbnail} alt={song.title} className="traditional-image" />
              <div className="traditional-details">
                <h4>{song.title}</h4>
                <p>by {song.artist}</p>
                <a 
                  href={song.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="youtube-link"
                >
                  Watch on YouTube 🎥
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
