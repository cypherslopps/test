import { WagmiConfig, createConfig } from "wagmi"
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { zkSyncTestnet } from "wagmi/chains";
import { useEffect, useState } from "react";

type WagmiProviderType = {
  children: React.ReactNode;
};
const projectId = process.env.NEXT_PUBLIC_W3C_PID;
const chains = [zkSyncTestnet];

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [zkSyncTestnet],
//   [
//     alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
//     publicProvider()
//   ]
// );

// export const wagmiConfig = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
//   connectors: [
//     new MetaMaskConnector({
//       chains,
//     }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: "zknebula",
//         headlessMode: true,
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: projectId,
//         showQrModal: true,
//       },
//     }),
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'zknebula',
//         shimDisconnect: true,
//       }
//     })
//   ],
// });

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    walletConnectProjectId: projectId,
    chains,
    appName: "zknebula",
    appDescription: "zknebula",
    appUrl: "zknebula.vercel.app",
    appIcon: "zknebula.vercel.app/favicon.png",
  }),
);

const WagmiProvider = ({ children }: WagmiProviderType) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), []);

  return (
    <>
      <WagmiConfig config={config}>
        <ConnectKitProvider>{mounted && children}</ConnectKitProvider>
      </WagmiConfig>
    </>
  );
};

export default WagmiProvider;