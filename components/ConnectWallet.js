import React from 'react'
import Button from 'react-bootstrap/Button'
import { ethers } from "ethers";
import { useState, useEffect } from "react"

export default function ConnectWallet() {
  const [provider, setProvider] = useState({})

  //Check if MetaMask exists
  useEffect( async () => {
       if (typeof window.ethereum !== 'undefined') {
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           setProvider(provider)
       }
   }, []);
    
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState("Empty")

  //Connect through MetaMask
  async function connect() {
    try {
// Switch to Polygon Network
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: "0x13881",
            rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
            chainName: "Mumbai Testnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        }],
    });

    // Connect Wallet
    await provider.send("eth_requestAccounts", []);
      setConnected(true)
      const signer = await provider.getSigner()
      if (signer !== null || undefined) {
        setAccount(signer)
      } else {
        setAccount("Empty")
      }
    } catch (ex) {
      console.log(ex)
      setConnected(false)
    }
    console.log("connect function is going through")
  }

  return (
    connected
        ? (<p>Connected</p>)
        : (<Button onClick={() => connect()}>Connect to MetaMask</Button>)
   // <Button onClick={() => connect()}>Connect to MetaMask</Button>
  )
  
}
