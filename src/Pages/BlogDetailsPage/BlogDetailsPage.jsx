import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import useTheme from "../../Hooks/useTheme";
import { Link, useParams } from "react-router";
import useBlogs from "../../Hooks/useBlogs";
// import { div, div } from "@/components/ui/div";
// import { buttton } from "@/components/ui/buttton";
// import { Facebook, Twitter, Linkedin } from "lucide-react";

const BlogDetailsPage = () => {
  const { color } = useTheme()
  const { id } = useParams()
  const [Blogs] = useBlogs()
  const filteredData = Blogs?.find((blog) => blog._id === id);
  console.log(filteredData)
  const scliceblog = Blogs?.slice(0, 5)
  const blogsreversedata = Blogs?.reverse().slice(0, 4)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="overflow-hidden">
            <img
              src={filteredData?.images[0]}
              alt="Crosswalk"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{filteredData?.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>•</span>
                <span>{filteredData?.time}</span>
              </div>
              <p className="text-gray-700 text-base">
                {filteredData?.title}
              </p>
              <div
                className="text-sm text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ __html: filteredData?.description }}
              ></div>
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


          {/* You May Like */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">You May Like</h4>
            <div className="space-y-6">
              {scliceblog?.map((item, index) => (
                <div key={index}>
                  <h4 className="text-md font-bold text-gray-800 mb-2">{item.title}</h4>
                  <div
                    className="text-sm text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: filteredData.description.slice(0, 100) }}
                  ></div>
                  <Link to={`/blogDetailsPage/${item?._id}`}>
                    <p style={{ color: color?.primary }} className="text-sm font-semibold">
                      Read More
                    </p>
                  </Link>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
      <div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] m-auto py-10 gap-6">
                  {blogsreversedata?.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl shadow-md overflow-hidden flex flex-col"
                    >
                      <img src={item.images[0]} alt={item.title} className="h-48 w-full object-cover" />
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                          <div
                            className="text-sm text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{ __html: item.description.slice(0, 100) }}
                          ></div>
                        </div>
                        <Link to={`/blogDetailsPage/${item?._id}`}><button
                          style={{ borderColor: color?.primary, color: color?.primary }}
                          className="mt-auto px-4 py-2 border  font-semibold rounded-md hover:bg-pink-50 w-fit"
                        >
                          Read more
                        </button></Link>
                      </div>
                    </div>
                  ))}
                </div>
      </div>
    </div>
  );
}
export default BlogDetailsPage;
