// src/components/WhyChooseUs.jsx

import { useRef, useState } from 'react';
import img2 from '../../../assets/products/img5.jfif';
import useTheme from '../../../Hooks/useTheme';
import { IoIosArrowDown } from "react-icons/io";

const items = [
  {
    id: 1,
    title: 'Equality and solidarity',
    content:
      'The generated is therefore always free from repetition, injected humour, or words etc.',
  },
  {
    id: 2,
    title: 'To inspire humanity',
    content:
      'The generated is therefore always free from repetition, injected humour, or words etc.',
  },
  {
    id: 3,
    title: 'Better living programs',
    content:
      'The generated is therefore always free from repetition, injected humour, or words etc.',
  },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState(null);
  const { color } = useTheme();
  const contentRefs = useRef({});

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Right Image */}
      <div>
        <img
          src={img2}
          alt="Tech devices"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Left Content */}
      <div>
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
          Why Choose Us -----
        </p>
        <h2
          style={{ color: color?.primary }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        >
          Justice served with
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          compassion
        </h2>

        {/* Accordion Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg mb-4 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: color?.primary || '#000' }}
                  className="text-white px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {`0${item.id}`}
                </div>
                <span className="text-lg font-semibold text-left">
                  {item.title}
                </span>
              </div>
              <span className="text-xl text-gray-600">
                {openId === item.id ? <IoIosArrowDown className='rotate-180' /> : <IoIosArrowDown />}
              </span>
            </button>

            <div
              ref={(el) => (contentRefs.current[item.id] = el)}
              style={{
                maxHeight:
                  openId === item.id && contentRefs.current[item.id]
                    ? `${contentRefs.current[item.id].scrollHeight}px`
                    : '0px',
              }}
              className="transition-all duration-500 ease-in-out overflow-hidden px-8"
            >
              <div className="pb-4 pt-2 text-sm text-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
