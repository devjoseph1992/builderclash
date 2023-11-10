import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

const download = () => {

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
        <h2 className='text-white'>Download</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
              Coming Soon!!!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default download;
