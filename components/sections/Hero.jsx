import React from 'react';
import heroImg from '@/public/assets/heroImage.png'
import Navbar from './Navbar';
import Button from '../buttons/Button';
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import WhyChooseMe from './WhyChooseMe';



const Hero = () => {
    return (
        <div 
        className='px-3 bg-no-repeat pb-20'
        style={{ backgroundImage: `url(${heroImg.src})` }}
        >
            <div className='mb-20'>
                <Navbar/>
            </div>
            <div className='px-6 mb-42'>
                <div className=' mb-16 px-8'>
                    <h1 className='text-7xl text-black font-black leading-relaxed'>Trusted <span className='px-4 bg-black text-white rounded-xl'>Partner</span> for <br /> Your Website <span className='px-4 bg-black text-white rounded-xl'>Develop</span></h1>
                </div>

                <div className='flex justify-between'>
                    {/* icons div */}
                    <div className='-rotate-90'>
                        <h3 className='text-2xl mb-8'>@williamrey</h3>
                        <div className='flex items-center gap-6'>
                            <div className='border border-b border-black w-10'></div>
                            <FaFacebook size={30} />
                            <BiLogoInstagramAlt size={30} />
                            <FaTwitterSquare size={30} />
                        </div>
                    </div>

                    <div>
                        <p className='text-lg w-7/12 font-medium mb-10'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                        <Button>Schedule a Call</Button>
                    </div>
                </div>
            </div>
            <WhyChooseMe/>
        </div>
    );
};

export default Hero;