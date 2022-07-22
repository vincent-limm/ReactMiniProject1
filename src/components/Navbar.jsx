import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type='button'
    onClick={customFunc}
    style={{ color }}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'
  >
    <span
      style={{ background: dotColor }}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-end p-2 md:mx-6 relative'>
      <div className='flex'>
        <NavButton title='Search' icon={<AiOutlineSearch />} />
        <NavButton
          title='Notifications'
          dotColor='#03C9D7'
          icon={<RiNotification3Line />}
        />
        <div
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}
        >
          <img className='rounded-full h-8 w-8' src={avatar} />
          <p>
            <span className='font-bold ml-1 text-14'>John Doe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
