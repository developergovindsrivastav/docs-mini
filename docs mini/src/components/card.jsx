import React from "react";
import { MdClear } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Background from "./background";
import { motion } from "framer-motion";
const Card = ({ data, reference }) => {
  return (
      
    <div className=" z-[2]  ">
      
          <motion.div drag dragConstraints = {reference} whileDrag={{scale : 1.3}} dragElastic = {1.2}   dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className=" font-Gilroy overflow-hidden  cursor-pointer relative   p-4  m-5 h-[210px] w-[190px] rounded-xl bg-zinc-900/90 text-white">
            <FaRegFileAlt />
            <p className=" text-sm leading-none pt-3">{data.title}</p>
            <div className="absolute w-full  mt-10 left-0">
              <div className="pl-2 pr-2  flex  justify-between items-center ">
                <h1>{data.filesize}</h1>
                {data.iconvalue ? (
                  <MdClear size={".8rem"} />
                ) : (
                  <GoDownload size={".8rem"} />
                )}
              </div>
              <div
                className="bg-sky-200 w-full   flex justify-center items-center h-[56px] mt-[22px]"
                style={{ backgroundColor: data.Color }}
              >
                {data.taglist.isactive ? (
                  <span className="progress-1"></span>
                ) : (
                  <h1 className=" font-bold">{data.taglist.tagdisc}</h1>
                )}
              </div>
            </div>
          </motion.div>
     
    </div>
        
  );
};

export default Card;
