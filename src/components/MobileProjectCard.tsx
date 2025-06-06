import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface MobileProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const MobileProjectCard = ({ title, description, image, link, tags = [], metrics = [] }: MobileProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
      whileTap={{ scale: 0.98 }}
    >
      <div className="card overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
        <div className="flex">
          {/* Image Section */}
          <div className="relative w-1/3 aspect-square overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-3">
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="text-base font-bold text-gray-900">
                {title}
              </h3>
              <ArrowUpRightIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-3 mb-2.5">
              {description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Metrics Section - if present */}
        {metrics.length > 0 && (
          <div className="px-3 pb-3 pt-1">
            <div className="grid grid-cols-2 gap-2">
              {metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                  <div className="text-sm font-semibold text-indigo-600">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.a>
  );
};

export default MobileProjectCard; 