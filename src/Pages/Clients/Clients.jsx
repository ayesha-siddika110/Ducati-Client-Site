import React from "react";

const logos = [
  "/logos/gatsby.png",
  "/logos/numpy.png",
  "/logos/amazon.png",
  "/logos/python.png",
  "/logos/angular.png",
  "/logos/microsoft.png",
  "/logos/macintosh.png",
  "/logos/blackhat.png",
];

const Clients = () => {
  return (
    <div className="overflow-hidden py-10 bg-white relative">
      <div className="flex w-max animate-marquee space-x-24">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="rounded-full shadow-lg p-4 bg-white w-20 h-20 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
