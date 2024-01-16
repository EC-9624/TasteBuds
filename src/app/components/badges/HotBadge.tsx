'use client';
import { useState } from 'react';

const HotBadge = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handleIconClick = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      <div data-tooltip-target="tooltip-default" onClick={handleIconClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-orange-500 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clipRule="evenodd"
          />
        </svg>

        {isPopUpVisible && (
          <div
            id="tooltip-default"
            role="tooltip"
            className="absolute right-10 top-60 z-10 visible  px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
          >
            数日間人気があるお店！
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        )}
      </div>
    </>
  );
};

export default HotBadge;