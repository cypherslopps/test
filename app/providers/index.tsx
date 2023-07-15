'use client';

import { ReactNode } from 'react';
import { ProposalProvider } from './proposals-provider';
import WagmiProvider from './wagmi-providers';
import { UserProvider } from './user-provider';
// import { ModalProvider } from './modal-provider';
// import WagmiProvider from './wagmi-providers';

type ProviderType = {
    children: ReactNode
}

function Providers({ children }: ProviderType) {
    return (
        <WagmiProvider>
            <UserProvider>
                <ProposalProvider>
                    {children}
                </ProposalProvider>
            </UserProvider>
        </WagmiProvider>
    )
}

export default Providers;