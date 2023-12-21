import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Company = () => {
  const Features = () => {
    const [activeList, setActiveList] = useState(false);

    const showList = () => {
      setActiveList(!activeList);
    };

    return (
      <div>
        <div className=" gap-[1rem] relative">
          <button onClick={showList}>Company</button>

          {!activeList ? (
            <svg
              className="absolute left-[5rem] top-[0.7rem]"
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#686868"
                strokeWidth="1.5"
                fill="#FFF"
                d="m1 1 4 4 4-4"
              />
            </svg>
          ) : (
            <svg
              className="absolute left-[5rem] top-[0.7rem]"
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#686868"
                strokeWidth="1.5"
                fill="#FFF"
                d="m1 5 4-4 4 4"
              />
            </svg>
          )}
        </div>


        <AnimatePresence>
        { activeList && (
        <motion.ul 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="flex items-start pl-[1rem] justify-center flex-col gap-[1rem] pt-[2rem]">
            <li><a href="/">History</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Blog</a></li>
        </motion.ul>
        ) }
        </AnimatePresence>

      </div>
    );
  };

  return <Features />;
};

export default Company;
