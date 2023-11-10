import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson, RxAccessibility } from 'react-icons/rx';
import { HiOutlineShoppingBag, HiShoppingCart } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { ConnectWallet } from '@thirdweb-dev/react';
import MenuLink from './MenuLink';
import { BsCoin, BsDownload, BsGift } from 'react-icons/bs';
import { FaRulerCombined } from 'react-icons/fa';

const menuItems = [
  {
 title: "Builder Clash",
 list: [
  {
    title: "Dashboard",
    path: "/",
    icon: <RxDashboard/>,
  },
  {
    title: "NFT's",
    path: "/nfts",
    icon: <RxAccessibility/>,
  },
  {
    title: "Airdrop",
    path: "/airdrop",
    icon: <BsGift/>,
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    icon: <HiShoppingCart/>,
  },
  {
    title: "Staking",
    path: "/staking",
    icon: <BsCoin/>,
  },
 ],
},
{
  title: "White Paper",
  list: [
    {
      title: "NFT",
      path: "/nft",
      icon: <RxAccessibility/>,
    },
    {
      title: "Breeding",
      path: "/breeding",
      icon: <FaRulerCombined/>,
    },
    {
      title: "Commodity token (BGC)(BP)",
      path: "/commodity",
      icon: <BsCoin/>,
    },
    {
      title: "Governance Token",
      path: "/governance",
      icon: <BsCoin/>,
    },
    {
      title: "Download",
      path: "/download",
      icon: <BsDownload/>,
    },
  ],
},
]

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-52 h-screen p-4 bg-[#121212] border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='inline-block'>
              <ConnectWallet/>
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          {menuItems.map((cat) =>(
            <div key={cat.title}>
              <h1 className='my-2'>{cat.title}</h1>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <main className='ml-52 w-full bg-black'>
        {children}
        </main>
    </div>
  );
};

export default Sidebar;
