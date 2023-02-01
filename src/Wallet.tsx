import { Layout, Row, Col, Button } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Interacting with Aptos
import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

function Wallet() {
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
      {!accountHasList && (
      <Row gutter={[0, 32]} style={{ marginTop: "2rem" }}>
        <Col span={8} offset={8}>
          <Button block type="primary" style={{ height: "40px", backgroundColor: "#3f67ff" }}>
            Add new list
          </Button>
        </Col>
      </Row>
    )}
    </>
  );
  }
  
  export default Wallet;