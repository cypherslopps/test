import { useWeb3Modal } from '@web3modal/react'

const WalletButton = () => {
  const { open, close } = useWeb3Modal()

  return <button onClick={() => open()}>Connect</button>
}

export default WalletButton;