import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ConnectKitProvider } from "connectkit";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { alchemyProvider } from "wagmi/providers/alchemy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { zkSyncTestnet } from "wagmi/chains";
import { useEffect, useState } from "react";

type WagmiProviderType = {
  children: React.ReactNode;
};
const projectId = process.env.NEXT_PUBLIC_W3C_PID;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [zkSyncTestnet],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
    publicProvider()
  ]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "zknebula",
        headlessMode: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
        showQrModal: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'zknebula',
        shimDisconnect: true,
      }
    })
  ],
});

const WagmiProvider = ({ children }: WagmiProviderType) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), []);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectKitProvider>{mounted && children}</ConnectKitProvider>
      </WagmiConfig>
    </>
  );
};

export default WagmiProvider;