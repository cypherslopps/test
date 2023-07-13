import { Provider } from 'zksync-web3';

export async function fetchZkSyncBalance(address: string) {
    try {
        const provider = await new Provider("https://testnet.era.zksync.dev"); 
        const blocks = await provider.getBalance(address, "latest", process.env.NEXT_PUBLIC_NEBULA_CONTRACT_ADDRESS);
        
        return Number(blocks._hex);
    } catch(e) {
        return e;
    }
}