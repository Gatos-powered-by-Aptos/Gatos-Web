import { Layout, Row, Col, Button, Typography } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Interacting with Aptos
import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

const moduleAddress =""

function Test() {
    const { account } = useWallet(); 

    useEffect(() => {
        fetchList();
      }, [account?.address]);
    const [accountHasList, setAccountHasList] = useState<boolean>(false);

    const fetchList = async () => {
        if (!account) return [];
        // change this to be your module account address
        const moduleAddress = "스마트 컨트렉트 배포 주소 ";
        try {
          const TodoListResource = await client.getAccountResource(
            account.address,
            `${moduleAddress}::main::TodoList`
          );
          setAccountHasList(true);
        } catch (e: any) {
          setAccountHasList(false);
        }
      };

    const getBalance = async () => {
      const balance = await client.getAccount(
      "0x7b95ccef123058430cfc4937b30ef862e2e0011348684ae937ab4c58a4f5a849",
      );
      console.log(balance)
      console.log(balance.sequence_number)
      alert!( balance.sequence_number)
    }

    const addNewList = async () => {
      if (!account) return [];
      // build a transaction payload to be submited
      const payload = {
        type: "entry_function_payload",
        function: `${moduleAddress}::main::create_list`,
        type_arguments: [],
        arguments: [],
      };
      try {
        // sign and submit transaction to chain
        //const response = await signAndSubmitTransaction(payload);
        // wait for transaction
        //await client.waitForTransaction(response.hash);
        setAccountHasList(true);
      } catch (error: any) {
        setAccountHasList(false);
      }
    };

    return (
    <>
      <Navbar/>
      <h3>On-chain Test</h3>
      <h4>get balance of this account</h4>
      <button type="button" onClick={getBalance}>
        <h2>getBalance: sequence number</h2>
      </button>
      <h4>interact with Smart Contract</h4>
      <Button onClick={addNewList} block type="primary" style={{ height: "40px", backgroundColor: "#3f67ff" }}>
        Add new list
      </Button>
    </>
  );
  }
  
  export default Test;