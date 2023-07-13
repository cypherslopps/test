'use client';

import { useState, createContext, useContext } from "react";

interface ProposalContextType {
  title: string,
  description: string,
  image?: File | object,
  discussion: string
}

const ProposalContext = createContext<ProposalContextType | any>({
  title: "",
  description: "",
  image: {},
  discussion: ""
});

export const ProposalProvider = ({ children } : { children: React.ReactNode }) => {
    const [newProposal, setNewProposal] = useState<ProposalContextType | any>({});

    return (
      <ProposalContext.Provider value={{ newProposal, setNewProposal }}>
          {children}
      </ProposalContext.Provider>
    )
}

export const useProposal = () => {
    const proposalContext = useContext(ProposalContext);
  
    if (!proposalContext) {
      throw new Error(
        "useProposal has to be used within <ProposalContext.Provider>"
      );
    }
  
    return proposalContext;
  };