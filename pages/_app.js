import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react';

const activeChain = 'mumbai';

export const metadata = {
	title: 'Global Games',
	description: 'Global Games a gaming development platform',
  }

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
    activeChain={activeChain}
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    supportedWallets={[metamaskWallet()]}>	
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ThirdwebProvider>
  );
}
