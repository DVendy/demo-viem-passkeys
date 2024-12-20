import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PublicClient, WalletClient } from 'viem';
import { useAccount } from 'wagmi';

interface AppContextType {
    publicClient?: PublicClient;
    setPublicClient: (publicClient: PublicClient) => void;

    walletClient?: WalletClient;
    setWalletClient: (walletClient?: WalletClient) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [publicClient, setPublicClient] = useState<PublicClient>();
    const [walletClient, setWalletClient] = useState<WalletClient>();

    return (
        <AppContext.Provider value={{
            publicClient,
            setPublicClient,
            walletClient,
            setWalletClient,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useEscherApp = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useEscherApp must be used within a AppProvider');
    }

    return context;
};
