import React from 'react'
import Button from 'react-bootstrap/Button'
import { ethers } from "ethers";
import { useState, useEffect } from "react"

export default function ConnectWallet() {
  const [provider, setProvider] = useState({})

  useEffect( async () => {
       if (typeof window.ethereum !== 'undefined') {
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           setProvider(provider)
       }
   }, []);
    
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState("Empty")

  async function connect() {
    try {
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
