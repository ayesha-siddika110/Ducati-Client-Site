import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import useTheme from "../../Hooks/useTheme";
import { Link } from "react-router";
// import { div, div } from "@/components/ui/div";
// import { buttton } from "@/components/ui/buttton";
// import { Facebook, Twitter, Linkedin } from "lucide-react";

const BlogDetailsPage=()=> {
    const {color} = useTheme()
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
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557682250-33bd709cbe85"
              alt="Crosswalk"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">\                Good Day To Take A Photo With Your Favourite
              </h1>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>Esrat Popy</span>
                <span>•</span>
                <span>September 12, 2023</span>
                <span>•</span>
                <span>No Responses</span>
              </div>
              <p className="text-gray-700 text-base">
                This trip of self-discovery takes place both literally and figuratively on the ocean,
                which is big and always changing. As you paddle out, each stroke helps you get away from the
                noise of everyday life and puts you in a state of heightened awareness...
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-4 text-gray-600 italic">
                "As you paddle out into the ocean, each deliberate stroke not only propels you away
                from the cacophony of everyday life but puts you in a state of heightened awareness."
                <br /> - Willis Orland
              </blockquote>
              <h2 className="text-xl font-semibold text-gray-800">\                Pass Some Quality Time At The Sea Shore
              </h2>
              <p className="text-gray-700 text-base">\                In an era marked by increasing globalization and accessibility, the concept of travel has transformed
                into more than just a leisurely escape. It’s now a pursuit of meaning and mindfulness...
              </p>
              {/* <div className="w-full aspect-video mt-4"> */}
                {/* <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Author div */}
          <div>
            <div className="p-6 text-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Erin Carter"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-lg font-bold mt-4">Erin Carter</h3>
              <p className="text-gray-600 text-sm">
                Meet Erin Carter, a passionate explorer, storyteller, and the creative force behind the blog "Wanderlust Whisper."
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <FaFacebook className="w-5 h-5 text-blue-600" />
                <FaTwitter className="w-5 h-5 text-blue-400" />
                <FaLinkedin className="w-5 h-5 text-blue-700" />
              </div>
            </div>
          </div>

          {/* You May Like */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">You May Like</h4>
            <div className="space-y-6">
        {rightArticles.map((item, index) => (
          <div key={index}>
            <h4 className="text-md font-bold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
            <Link to="/blogDetailsPage">
            <p style={{color: color?.primary}} className="text-sm font-semibold">
              {item.link}
            </p>
            </Link>
          </div>
        ))}
          </div>

         
        </div>
      </div>
    </div>
    </div>
  );
}
export default BlogDetailsPage;
