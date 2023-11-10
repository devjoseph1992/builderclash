import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

const governance = () => {

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
        <h2 className='text-white'>Governance</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-[#242323] overflow-y-auto'>
          <div className='place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="text-white mb-4 text-base sm:text-base text-center lg:text-base lg:leading-normal font-extrabold">
          Governance Token (BGX)

What is BGX, and how can one use it?
Developed as the governance token of the Builder Clash Metaverse, Builders Gem (BGX) is found on the Polygon Layer 2 chain. There won't be many options to earn BGX through gaming at first, but with the launch of community treasury staking, this will soon change. 

General BGX Statistics:

Question                  Answer
Token Name           Builder Gem
Token Symbol         BGX
Token Decimal        18
Token Type              ERC-20
Total Supply            1,000,000,000 BGX(1B)
Block Chain              Polygon(MATIC) Chain

Note that when Builder Clash launches, it won't be a fully decentralized game. Many years of game development and community building will be required for this process. The game studio will use the fees (listed below) from the Builder Clash ecosystem to help with development expenditures, large-scale partnerships, hiring senior professionals, and laying a very solid foundation for the first year*. With the help of this system, the game studio is able to progress and accelerate the creation of the game, hastening the game's eventual decentralization.
When staking does launch, users will be able to place their tokens within the Treasury and get BGX in addition to having the option to cast votes on important proposals and improvements for the ecosystem. In the end, through large scale tournaments and other events, players will be able to earn BGX.

Inside the Builder Clash Metaverse, we have introduced multiple use cases for the BGX token, these include:
Breeding fee
Purchasing of Builder on the marketplace
Staking
Large tournament rewards
The Builder Clash ecosystem involves two primary fees at launch, these are:
BGX fee associated with breeding.
3%* fee on all marketplace transactions.
Builder Clash total decentralization won't happen quickly or easily. We intend to gradually transition fully to decentralization through trial and error in tandem with our expanding community after the game mechanics, DAO, and gameplay have been "perfected".
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default governance;
