import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

const breeding = () => {

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
        <h2 className='text-white'>Breeding</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
          It's time to holler!
Builders can breed to produce more Builders, just like in the real world. You will discover how to breed your Builders and what materials you need in this guide. Let's get going!

Breeding Restraints:
Builders will burn after breeding for the fifth time.

Builder's sibling and parents/offspring are unable to breed.

Depending on how many times the parent Builders have been bred, breeding costs differ.

To breed, you'll need BGX and BGC/BP tokens.

Equivalent elements cannot be bred by builders.

Maiden will identify the main components.

hybrid constructors 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default breeding;
