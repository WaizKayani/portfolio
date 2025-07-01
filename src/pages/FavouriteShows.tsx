import React from 'react';
import { motion } from 'framer-motion';
import { FaTv, FaPlay, FaStar, FaHeart } from 'react-icons/fa';

const favouriteShows = [
  {
    title: "Breaking Bad",
    genre: "Crime Drama",
    rating: "9.5/10",
    description: "A high school chemistry teacher turned methamphetamine manufacturer.",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    color: "from-yellow-500 to-orange-600",
    watchLink: "https://www.netflix.com/title/70143836"
  },
  {
    title: "Game of Thrones",
    genre: "Fantasy Drama",
    rating: "9.2/10",
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    color: "from-gray-700 to-gray-900",
    watchLink: "https://www.imdb.com/title/tt0944947/"
  },
  {
    title: "The Office",
    genre: "Comedy",
    rating: "8.9/10",
    description: "A mockumentary about the everyday lives of office employees.",
    image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    color: "from-blue-500 to-blue-700",
    watchLink: "https://www.peacocktv.com/stream-tv/the-office"
  },
  {
    title: "Money Heist",
    genre: "Crime Thriller",
    rating: "8.3/10",
    description: "A criminal mastermind recruits eight people to carry out an ambitious plan.",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    color: "from-red-600 to-red-800",
    watchLink: "https://www.netflix.com/title/80192098"
  },
  {
    title: "Stranger Things",
    genre: "Sci-Fi Horror",
    rating: "8.7/10",
    description: "Kids uncover supernatural mysteries in their small town.",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    color: "from-red-600 to-red-800",
    watchLink: "https://www.netflix.com/title/80057281"
  },
  {
    title: "Emily in Paris",
    genre: "Drama, Comedy",
    rating: "7.1/10",
    description: "When ambitious Chicago marketing exec Emily unexpectedly lands her dream job in Paris, she embraces a new life as she juggles work, friends and romance.",
    image: "https://image.tmdb.org/t/p/w1280/qYGIf2QAhSIa5Xbf72QvLtte2e8.jpg",
    color: "from-pink-400 to-pink-600",
    watchLink: "https://www.netflix.com/title/81037371"
  }
];

const FavouriteShows: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
            <FaTv className="mr-4 text-red-600" />
            Favourite Shows of All Time
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            "Television is the most powerful medium of mass communication that has ever existed." 📺
          </p>
        </motion.div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favouriteShows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${show.color} p-1`}>
                <div className="bg-black rounded-lg overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-yellow-400">
                        <FaStar className="mr-1" />
                        <span className="text-sm font-semibold">{show.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{show.genre}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{show.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200" onClick={() => window.open(show.watchLink, '_blank', 'noopener noreferrer')}>
                        <FaPlay className="mr-2" />
                        Watch Now
                      </button>
                      <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                        <FaHeart className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 italic">
            "The best shows are the ones that stay with you long after the credits roll." 🎬
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FavouriteShows; 