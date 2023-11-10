import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

const commodity = () => {

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
        <h2 className='text-white'>Commodity</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
          To put it briefly, the main "earning" and "spending" token in the Builder Clash ecosystem is called Builders Potion (BP) or Builders Gold Coin (BGC).
It is important to clarify that BGC/BP is not "pre-minted"; rather, it is manufactured by players destroying other bases in order to collect BGC/BP. The Breeding/Upgrading model (as well as potential future BGC/BP sinks) that are described later in the whitepaper burn (destroy) BGC/BP. Our objective is to prevent micromanagement and excessive ecosystem dictation while achieving a well balanced mint to burn ratio.
As previously stated, by defeating, robbing, or mining other players in the game, users can obtain BGC/BP tokens.  The in-game economy moves quickly, therefore the quantity of BGC/BP rewarded for mining, looting, or destroying things could up or down in the future
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default commodity;
