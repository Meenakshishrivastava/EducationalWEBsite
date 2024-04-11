import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-black py-16 text-white'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>CORE CRAFTER.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Courses</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Curicullum</li>
            <li>Blog</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;