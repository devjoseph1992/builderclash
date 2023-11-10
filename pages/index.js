import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import { useAddress } from '@thirdweb-dev/react';

export default function Home() {

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
    <>
      <Head>
        <title>Builder Clash</title>
        <meta name='description' content='Builder Clash' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-[#121212] min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          {/* <BarChart /> */}
          {/* <RecentOrders /> */}
        </div>
      </main>
    </>
  );
}
