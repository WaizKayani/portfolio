import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay, FaUsers, FaHeart, FaExternalLinkAlt } from 'react-icons/fa';

const favouriteYouTubers = [
  {
    name: "MrBeast",
    category: "Entertainment",
    subscribers: "200M+",
    description: "Known for massive giveaways and creative challenges.",
    image: "https://picsum.photos/id/1040/300/200",
    color: "from-red-500 to-red-700",
    channelUrl: "https://www.youtube.com/@MrBeast"
  },
  {
    name: "PewDiePie",
    category: "Gaming",
    subscribers: "111M+",
    description: "Swedish YouTuber known for gaming content and commentary.",
    image: "https://picsum.photos/id/1041/300/200",
    color: "from-blue-500 to-blue-700",
    channelUrl: "https://www.youtube.com/@PewDiePie"
  },
  {
    name: "Mark Rober",
    category: "Science & Engineering",
    subscribers: "25M+",
    description: "Former NASA engineer creating educational and entertaining science content.",
    image: "https://picsum.photos/id/1042/300/200",
    color: "from-green-500 to-green-700",
    channelUrl: "https://www.youtube.com/@MarkRober"
  },
  {
    name: "Dude Perfect",
    category: "Sports & Entertainment",
    subscribers: "60M+",
    description: "Trick shots, stunts, and sports entertainment.",
    image: "https://picsum.photos/id/1043/300/200",
    color: "from-purple-500 to-purple-700",
    channelUrl: "https://www.youtube.com/@DudePerfect"
  },
  {
    name: "Veritasium",
    category: "Science & Education",
    subscribers: "15M+",
    description: "Science videos that explore the world through experiments and explanations.",
    image: "https://picsum.photos/id/1044/300/200",
    color: "from-indigo-500 to-indigo-700",
    channelUrl: "https://www.youtube.com/@veritasium"
  },
  {
    name: "Kurzgesagt",
    category: "Science & Animation",
    subscribers: "25M+",
    description: "Animated videos explaining complex scientific concepts.",
    image: "https://picsum.photos/id/1045/300/200",
    color: "from-yellow-500 to-orange-600",
    channelUrl: "https://www.youtube.com/@kurzgesagt"
  }
];

const FavouriteYouTubers: React.FC = () => {
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
            <FaYoutube className="mr-4 text-red-600" />
            Favourite YouTubers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            "YouTube has democratized content creation and given voice to millions." 🎥
          </p>
        </motion.div>

        {/* YouTubers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favouriteYouTubers.map((youtuber, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${youtuber.color} p-1`}>
                <div className="bg-black rounded-lg overflow-hidden">
                  <img 
                    src={youtuber.image} 
                    alt={youtuber.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{youtuber.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-red-400">
                        <FaUsers className="mr-1" />
                        <span className="text-sm font-semibold">{youtuber.subscribers}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{youtuber.category}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{youtuber.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <a 
                        href={youtuber.channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaPlay className="mr-2" />
                        Watch Channel
                      </a>
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
            "The best creators are the ones who inspire, educate, and entertain." 🎬
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FavouriteYouTubers; 