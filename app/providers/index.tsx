'use client';

import { ReactNode } from 'react';
import { ProposalProvider } from './proposals-provider';
import WagmiProvider from './wagmi-providers';
// import { ModalProvider } from './modal-provider';
// import WagmiProvider from './wagmi-providers';

type ProviderType = {
    children: ReactNode
}

function Providers({ children }: ProviderType) {
    return (
        <WagmiProvider>
            <ProposalProvider>
                {children}
            </ProposalProvider>
        </WagmiProvider>
    )
}

export default Providers;