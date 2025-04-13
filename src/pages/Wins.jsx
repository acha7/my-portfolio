import React from 'react';
import { CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'; // Updated import for v2

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <CheckCircleIcon className="w-12 h-12 text-black wins" />,
      title: 'Years Of Experience',
      number: 4,
      bgColor: 'bg-teal-700',
    },
    {
      id: 2,
      icon: <UserGroupIcon className="w-12 h-12 text-black wins" />,
      title: 'Projects Done',
      number: 7,
      bgColor: 'bg-teal-800',
    },
    {
      id: 3,
      icon: <CheckCircleIcon className="w-12 h-12 text-black wins" />,
      title: 'Happy Clients',
      number: 4,
      bgColor: 'bg-teal-700',
    },
    {
        id: 3,
        icon: <CheckCircleIcon className="w-12 h-12 text-black wins" />,
        title: 'Certificates',
        number: 2,
        bgColor: 'bg-teal-700',
      },
  ];

  return (
    <div className="relative -mb-16 flex justify-center space-x-6 mx-auto w-full max-w-6xl px-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white shadow-lg  p-6 w-1/3 flex items-center justify-center"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-md mb-4 mr-4 flex-shrink-0" style={{ backgroundColor: stat.bgColor }}>
            {stat.icon}
          </div>
          <div>
            <p className="wins text-blue-800 text-lg font-semibold">{stat.title}</p>
            <p className="text-navy-900 text-3xl font-bold">{stat.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
