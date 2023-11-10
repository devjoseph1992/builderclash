import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Countdown from '@/components/countdown/Countdown';

const airdrop = () => {

  const address = useAddress();

  if(!address) {
    return(
      <div className='bg-[#121212] min-h-screen'>
      <div className='flex items-center justify-between p-4'>
        <h2 className='text-white'>Warning</h2>
      </div>
      <div className='p-4'>
      <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
            <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
              Please Connect You're Wallet
            </h1>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='bg-[#121212] min-h-screen'>
      <div className='flex items-center justify-between p-4'>
        <h2 className='text-white'>Airdrop</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
            <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
                Air Dropping Builder Gem
              <p className="text-[#ADB7BE] mb-4 text-base text-center">
                {" "}<Countdown/>
                We are presently seeking investors, and in exchange for registering on our Google Forms, we will airdrop 1000BGX into your wallet. To obtain additional BGX, follow us on social media.
and we're seeking team members. Please reach out to us on social media, like, and share.
             </p>
          </h1>   
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUB2u5zE99blDp4ifzg5HENMKqVQ_gXvj-I4IbockUovjebQ/viewform?embedded=true" width="1000" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
};

export default airdrop;
