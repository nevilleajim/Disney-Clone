import { React, useState} from 'react';
import logo from '../assets/images/Logo.png';
import { HiHome, 
      HiStar,
      HiPlayCircle,
      HiMagnifyingGlass,
      HiTv} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
      const [toggle, setToggle] = useState(false)
      const menu = [
            {
                  name: 'HOME',
                  icon: HiHome
            },
            {
                  name: 'SEARCH',
                  icon: HiMagnifyingGlass
            },
            {
                  name: 'WATCH LIST',
                  icon: HiPlus
            },
            {
                  name: 'ORIGINALS',
                  icon: HiStar
            },
            {
                  name: 'MOVIES',
                  icon: HiPlayCircle
            },
            {
                  name: 'SERIES',
                  icon: HiTv
            }
      ]
  return (
    <div className='flex items-center justify-between mt-5'>
      <div className='flex gap-8 items-center'>
            <div className='hidden md:flex gap-8'>
                  <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                        {menu.map((item, index) => (
                              <HeaderItem key={index} name={item.name} Icon={item.icon} />
                        ))}
            </ div>
            <div className='flex md:hidden gap-5'>
                  <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                        {menu.map((item, index) => index<3 &&(
                              <HeaderItem key={index} name={''} Icon={item.icon} />
                        ))}
                  <div className='md:hidden mt-[0.4rem]' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/>
                       {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 pb-4'>
                              {menu.map((item, index) => index>2 &&(
                                          <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                    ))}
                        </div>:null}
                  </div>
            </ div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
