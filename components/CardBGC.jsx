import React from 'react'
import { useAddress,useContract,useTokenBalance } from "@thirdweb-dev/react";
import { BUILDER_GOLD_COIN_ADDRESSES } from "../cons/address";

const CardBGC = () => {

    const address = useAddress();
    const { contract: tokenContract } = useContract(BUILDER_GOLD_COIN_ADDRESSES);
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    return(
        <>
        <div className='lg:col-span-2 col-span-1 bg-[#242323] flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>{tokenBalance?.displayValue}</p>
                <p className='text-2xl font-bold'>{tokenBalance?.symbol}</p>
                <p className='text-white'>Builder Gold Coin</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p> */}
        </div>
        </>
    )
}

export default CardBGC