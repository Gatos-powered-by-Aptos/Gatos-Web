import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AddIcon from '@mui/icons-material/Add';

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"; 
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";
import { Height, Opacity } from '@mui/icons-material';

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 12,
  height: 12,
  border: `1px solid #0ACFFE`,
}));

export default function Explorer() {
  
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
    <div>
    <Box sx={{ flexGrow: 1, backgroundColor:'black' }}>
      <Container maxWidth="xl">
      <AppBar position="static"
        sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 17 }}>GATOS</Typography>
          <WalletSelector/>
        </Toolbar>
      </AppBar>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      
      <Container maxWidth="xl">
      <Box display="flex"
      alignItems="center"
      justifyContent="center">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar sx={{backgroundColor:'#0ACFFE'}}>
            <Button
            sx={{color: 'black',}}
            ><AddIcon/></Button>
          </SmallAvatar>
        }
      >
        <Avatar sx={{width: 100, height: 100, border: '1px solid #0ACFFE'}}  />
      </Badge>
      </Box>
      <br></br>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight:'bold' }} align="center">User name</Typography>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: 'white' }} align="center">afbb51e46e0f5579ad71ea46c</Typography>
      </Container>

      <br></br>
      <br></br>
      <br></br>

      <Container maxWidth="xl">
        <Typography variant="h5" sx={{color: "#0ACFFE", fontWeight: '600', mb:2}}  >Overview</Typography>
        <Box display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{flexDirection: 'row'}}>
              <Box sx={{border: '1px solid #495AFF', borderRadius:'5px', opacity:'40%', width:'100px', height:'100px', mr: 2, }}>
                <Typography variant="h5" sx={{color: 'white', pl:5, ph:5}}>32</Typography>
              </Box>
              <Box sx={{border: '1px solid #495AFF', borderRadius:'5px', opacity:'40%', width:'100px', height:'100px', mr: 2,}}></Box>
              <Box sx={{border: '1px solid #495AFF', borderRadius:'5px', opacity:'40%', width:'100px', height:'100px', }}></Box>
            </Box>
      </Container>
      
      <Container maxWidth="xl">
      <Typography variant="h5" sx={{color: "#0ACFFE", fontWeight: '600'}}  >Posts</Typography>
      </Container>
      
      <Container maxWidth="xl">
      <Typography variant="h5" sx={{color: "#0ACFFE", fontWeight: '600'}}  >Recent Played</Typography>
      <br></br>
      <Card variant="outlined" 
      sx={{ borderRadius: '10px',backgroundColor: 'grey'}}>
      <CardMedia
        sx={{ height: 200,
        backgroundColor: 'black',
        color: 'white' }}
        
        image="/assets/images/theSandboxLogo.svg"
        title="game1"
      >
       <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              Game Title</Typography>
      </CardMedia>
      <CardContent>
        <Box display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{flexDirection: 'row'}}>
          <Box display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{flexDirection: 'column',}}>
            <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              #3</Typography>
            <Typography gutterBottom variant="body1" component="div"
            sx={{color:'lightGrey'}}>
              Ranking</Typography>
          </Box>
        </Box>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
    </Container>

    <Container maxWidth="xl">
      <br></br>
      <br></br>
      <Card variant="outlined" 
      sx={{ borderRadius: '10px', backgroundColor: 'grey'}}>
      <CardMedia
        sx={{ height: 200,
        backgroundColor: 'black',
        color: 'white' }}
        
        image="/assets/images/theSandboxLogo.svg"
        title="game1"
      >
        <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              Game Title</Typography>
      </CardMedia>
      <CardContent>
        <Box display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{flexDirection: 'row'}}>
          <Box display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{flexDirection: 'column',}}>
            <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              #3</Typography>
            <Typography gutterBottom variant="body1" component="div"
            sx={{color:'lightGrey'}}>
              Ranking</Typography>
          </Box>
        </Box>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
    </Container>

    <Container maxWidth="xl">
      <br></br>
      <br></br>
      <Card variant="outlined" 
      sx={{ borderRadius: '10px', backgroundColor: 'grey'}}>
      <CardMedia
        sx={{ height: 200,
        backgroundColor: 'black',
        color: 'white' }}
        
        image="/assets/images/theSandboxLogo.svg"
        title="game1"
      >
        <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              Game Title</Typography>
      </CardMedia>
      <CardContent>
        <Box display="flex"
            alignItems="center"
            justifyContent="flex-end"
            sx={{flexDirection: 'row'}}>
          <Box display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{flexDirection: 'column',}}>
            <Typography gutterBottom variant="h5" component="div"
            sx={{color:'white'}}>
              #3</Typography>
            <Typography gutterBottom variant="body1" component="div"
            sx={{color:'lightGrey'}}>
              Ranking</Typography>
          </Box>
        </Box>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
    </Container>
    
    </Box>
    </div>
  );
  

}