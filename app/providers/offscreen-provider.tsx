"use client";

import { FC, ReactNode, createContext, useState } from 'react';
import Modal from '../components/modal/modal';
import Offset from '../components/offset/offset';
import { useContext } from 'react';

interface OffScreenContextProps {
    isOffScreenOpen?: boolean;
    openOffScreen: () => void;
    closeOffScreen: () => any;
    type: "Modal" | "OffScreen" | null;
    setType: () => any;
}

interface OffScreenProviderProps {
    children: ReactNode
}

export const OffScreenContext = createContext<OffScreenContextProps>({
    isOffScreenOpen: false,
    openOffScreen: () => {},
    closeOffScreen: () => {},
    type: null,
    setType: () => {}
});


export const OffScreenProvider: FC<OffScreenProviderProps> = ({ children }) => {
    const [isOffScreenOpen, setIsOffScreenOpen] = useState<boolean>(false);
    const [type, setType] = useState<"Modal" | "OffScreen" | null>(null);
    let Element;

    const openOffScreen = () => setIsOffScreenOpen(true);
    const closeOffScreen = () => setIsOffScreenOpen(false);

    if(type === "Modal")
        Element = (<Modal closeModal={closeOffScreen} />);
    else if(type === "OffScreen")
        Element = (<Offset closeOffset={closeOffScreen} />);

    return (
        <>
            <OffScreenContext.Provider value={{
                isOffScreenOpen,
                openOffScreen,
                closeOffScreen,
                setType
            }}>
                {children}
            </OffScreenContext.Provider>

            {/* OffScreen */}
            {isOffScreenOpen && (
                <>{Element}</>
            )}
        </>
    )
}

export const useOffScreen = () => {
    const offScreenContext = useContext(OffScreenContext);
  
    if (!offScreenContext) {
      throw new Error(
        "useOffScreen has to be used within <OffScreenContext.Provider>"
      );
    }
  
    return OffScreenContext;
  };
