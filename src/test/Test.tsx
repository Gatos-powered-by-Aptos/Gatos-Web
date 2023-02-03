import { Row, Col, Button, Spin } from "antd";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Interacting with Aptos
import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";


const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

// The moduleAddress is the address we publish the module under, 
//i.e the account address you have in your Move.toml file (myaddr). 
const moduleAddress ="7e652165e4bf01e87f4d655d8a44a9183858cdad959e512944f99889e5eb1e47"


function Test() {
  const { account, signAndSubmitTransaction } = useWallet();
  const [accountHasList, setAccountHasList] = useState<boolean>(false);

  const getBalance = async () => {
      const balance = await client.getAccount(
      "7e652165e4bf01e87f4d655d8a44a9183858cdad959e512944f99889e5eb1e47 ",
      );
      console.log(balance)
      console.log(balance.sequence_number)
      alert!( balance.sequence_number)
  }

    const postBoard = async () => {
      if (!account) return [];
      setTransactionInProgress(true);
      // build a transaction payload to be submited
      const payload = {
        type: "entry_function_payload",
        function: `${moduleAddress}::community::post_board_init`,
        type_arguments: [],
        arguments: [],
      };
      try {
        // sign and submit transaction to chain
        const response = await signAndSubmitTransaction(payload);
        // wait for transaction
        await client.waitForTransaction(response.hash);
        setAccountHasList(true);
      } catch (error: any) {
        setAccountHasList(false);
      } finally {
        setTransactionInProgress(false);
      }
    };

    const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);

    return (
    <>
      <Navbar/>
      <h3>On-chain Test</h3>
      <h4>get balance of this account</h4>
      <button type="button" onClick={getBalance}>
        <h2>getBalance: sequence number</h2>
      </button>
      <h4>interact with Smart Contract</h4>
      <Spin spinning={transactionInProgress}>
      {!accountHasList && (
        <Row gutter={[0, 32]} style={{ marginTop: "2rem" }}>
          <Col span={8} offset={8}>
            <Button onClick={postBoard} block type="primary" style={{ height: "40px", backgroundColor: "#3f67ff" }}>
              post Board
            </Button>
          </Col>
        </Row>
      )}
    </Spin>
    </>
  );
  }
  
  export default Test;