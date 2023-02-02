import { Layout, Row, Col, Button, Typography } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Interacting with Aptos
import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

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

    const setProfile = async () => {
    }

    return (
    <>
      <Layout>
        <Row align="middle">
          <Col span={10} offset={2}>
            <h1>Gatos</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
      <h3>On-chain Test</h3>
      <h4>get balance of this account</h4>
      <button type="button" onClick={getBalance}>
        <h2>getBalance: sequence number</h2>
      </button>
      <h4>interact with Smart Contract</h4>
      <button type="button" onClick={setProfile}>
      <   h2>set Profile: name and image default </h2>
      </button>
    </>
  );
  }
  
  export default Test;