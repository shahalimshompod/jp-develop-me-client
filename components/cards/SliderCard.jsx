import Image from 'next/image';
import React from 'react';

const SliderCard = ({data}) => {
    console.log(data.image)
    return (
         <div
            className="w-full xl:w-1/3 bg-[#1a1a1a] text-white rounded-3xl p-6 flex-shrink-0 hover:rotate-[4deg] transition-transform duration-300"
          >
            <div className="mb-4">
              <Image className='w-20' src={data.image} alt={data.title}/>
            </div>
            <h3 className="text-xl font-bold mb-2">{data.title}</h3>
            <p className="text-lg text-gray-300 w-8/12">{data.description}</p>
          </div>
    );
};

export default SliderCard;