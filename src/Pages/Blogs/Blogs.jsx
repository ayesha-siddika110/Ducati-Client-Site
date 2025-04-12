import React, { useCallback } from "react";
import useTheme from "../../Hooks/useTheme";

const articles = [
  {
    image:
      "https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg",
    title: "Analyzing Spotify Music UI/UX",
    description:
      "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
    buttonText: "READ ARTICLE"
  },
  {
    image:
      "https://i.ibb.co.com/S7DBd0bF/7d8be7430ad63595921754acdd8b7a62-1.jpg",
    title: "Continuous Design and Good Strategies",
    description:
      "As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business.",
    buttonText: "READ ARTICLE"
  }
];

const rightArticles = [
  {
    title: "Warner Music Group buys tickets",
    description:
      "We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
    link: "Read More"
  },
  {
    title: "The human brain in the new Era",
    description:
      "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves",
    link: "Read More"
  },
  {
    title: "A healthy body is light and silent",
    description:
      "That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.",
    link: "Read More"
  }
];

const Blogs =()=> {
    const {color} = useTheme()
  const handleReadArticle = useCallback((title) => {
    alert(`Reading article: ${title}`);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              </div>
              <button
                onClick={() => handleReadArticle(item.title)} style={{borderColor: color?.primary, color: color?.primary}}
                className="mt-auto px-4 py-2 border  font-semibold rounded-md hover:bg-pink-50 w-fit"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        {rightArticles.map((item, index) => (
          <div key={index}>
            <h4 className="text-md font-bold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
            <a href="#" style={{color: color?.primary}} className="text-sm font-semibold">
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blogs
