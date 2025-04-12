import { FaRocket, FaBullseye, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import useTheme from '../../../Hooks/useTheme';


export default function ContactServices() {
    const {color} = useTheme()
const services = [
  {
    icon: <FaRocket size={40} style={{color: color?.primary}} className="text-blue-500" />,
    title: 'Custom Software Solution',
    description:
      'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
  },
  {
    icon: <FaBullseye size={40} style={{color: color?.primary}} className="text-blue-500" />,
    title: 'Business technology solution',
    description:
      'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
  },
  {
    icon: <FaShieldAlt size={40} style={{color: color?.primary}} className="text-blue-500" />,
    title: 'Recovery & IT security',
    description:
      'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
  },
  {
    icon: <FaLightbulb size={40} style={{color: color?.primary}} className="text-blue-500" />,
    title: 'Idea generate & solution',
    description:
      'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
  },
];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <p style={{color: color?.primary}} className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        What We Provide
      </p>
      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-12">
        We provide truly prominent digital solutions.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx} style={{borderColor: `${color?.primary}`}}
            className="bg-white rounded-xl shadow-md p-6 border-t-[6px] border-blue-500 hover:shadow-lg transition-all ease-in-out flex flex-col justify-center items-center hover:scale-[95%] "
          >
            <div className="mb-6 ">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
