import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const WorkProcessCard = ({ data }) => {
    return (
        <div className='
            p-8 bg-black rounded-2xl 
            transition-all duration-300 ease-in-out 
            hover:bg-[#C5FF41] 
            hover:rotate-[5deg]
            group
            cursor-pointer
        '>
            <div className='flex items-center justify-between mb-6'>
                <p className='
                    text-xl bg-[#C5FFEE] rounded-full px-6 text-black
                    group-hover:bg-black group-hover:text-white
                    transition-all duration-300 ease-in-out
                '>
                    {data.title}
                </p>
                <p className='
                    text-white flex items-center gap-2
                    group-hover:text-black
                    transition-all duration-300 ease-in-out underline
                '>
                    <FaArrowRight /> <span>Read More</span>
                </p>
            </div>
            <p className='
                text-white
                group-hover:text-black
                transition-all duration-300 ease-in-out
            '>
                {data.description}
            </p>
        </div>
    );
};

export default WorkProcessCard;