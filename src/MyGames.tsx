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
import Grid from '@mui/material/Grid';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import gatosLogo from './assets/images/GATOS.png';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"; 
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";
import { Height, Opacity } from '@mui/icons-material';

import promotion1 from './assets/images/promotion1.jpeg';
import promotion2 from './assets/images/aptosflip.jpeg';
import promotion4 from './assets/images/promotion4.jpeg';

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 12,
  height: 12,
  border: `1px solid #0ACFFE`,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      
      
  return (
    <div>
  <Box sx={{ flexGrow: 1, backgroundColor:'black'}}>
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
            onClick={handleClick}
          >
            <MenuIcon sx={{color:'#0ACFFE'}}/>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
        <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/gamefeed">GameFeed</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/mygames">MyGames</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/community">Community</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="/onchain">Test</Link>
        </MenuItem>
      </Menu>
          </IconButton>
          <div>
            <img src={gatosLogo} alt="logo" width="80vw"/>
          </div>
          <Box sx={{width:'500vw'}}></Box>
          <WalletSelector></WalletSelector>
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
            ><EditIcon sx={{fontSize: 11}}/></Button>
          </SmallAvatar>
        }
      >
        <Avatar sx={{backgroundColor:'black',width: 100, height: 100, border: '1px solid #0ACFFE'}}  />
      </Badge>
      </Box>
      <br></br>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight:'bold' }} align="center">User name</Typography>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: 'white' }} align="center">afbb51e46e0f5579ad71ea46c</Typography>
      </Container>

      <br></br>
      <br></br>
      <br></br>

      <Container maxWidth="xl" sx={{ bgcolor: 'black' }}>
        <Typography
          sx={{ color: '#0ACFFE', fontWeight: '600', mb: 2, fontSize: '16px' }}
        >
          Overview
        </Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={0.3}></Grid>
          <Grid item xs={3.9}>
            <Box
              sx={{
                border: '1px solid #3742AC',
                borderRadius: '5px',
                width: '100px',
                height: '100px',
                mr: 2,
              }}
            >
              <Box sx={{ mb: 3 }}></Box>
              <Typography
                align="center"
                sx={{ color: '#0ACFFE', fontSize: '30px' }}
              >
                32
              </Typography>
              <Box sx={{ mb: 0.5 }}></Box>
              <Typography
                align="center"
                sx={{ opacity: 0.6, color: 'white', fontSize: '11px' }}
              >
                GATOS Level
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3.9}>
            <Box
              sx={{
                border: '1px solid #3742AC',
                borderRadius: '5px',
                width: '100px',
                height: '100px',
                mr: 2,
              }}
            >
              <Box sx={{ mb: 3 }}></Box>
              <Typography
                align="center"
                sx={{ color: '#0ACFFE', fontSize: '30px' }}
              >
                5
              </Typography>
              <Box sx={{ mb: 0.5 }}></Box>
              <Typography
                align="center"
                sx={{ opacity: 0.6, color: 'white', fontSize: '11px' }}
              >
                Games with us
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3.9}>
            <Box
              sx={{
                border: '1px solid #3742AC',
                borderRadius: '5px',
                width: '100px',
                height: '100px',
                mr: 2,
              }}
            >
              <Box sx={{ mb: 3 }}></Box>
              <Typography
                align="center"
                sx={{ color: '#0ACFFE', fontSize: '30px' }}
              >
                42
              </Typography>
              <Box sx={{ mb: 0.5 }}></Box>
              <Typography
                align="center"
                sx={{ opacity: 0.6, color: 'white', fontSize: '11px' }}
              >
                Posts
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br/>


      <Container maxWidth="xl">
        <Typography
          sx={{ color: '#0ACFFE', fontWeight: '600', mb: 2, fontSize: '16px' }}
        >
          Posts
        </Typography>
        <Card
          sx={{
            borderRadius: '10px',
            Width: '350px',
            Height: '128px',
            bgcolor: 'black',
            border: '1px solid #3742AC',
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              sx={{ flexDirection: 'row' }}
            >
              <Grid container spacing={1}>
                <Grid item xs={2.5}>
                  <Avatar
                    sx={{
                      bgcolor:'black',
                      border: '1px solid #495AFF',
                      width: '50px',
                      height: '50px',
                      mb: 1.5,
                      mr: 2,
                    }}
                  ></Avatar>
                </Grid>
                <Grid item xs={6.5}>
                  <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      sx={{ fontSize: 14, color: 'white', fontWeight: 'light' }}
                    >
                      Username001
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: 'white',
                        opacity: '60%',
                        fontWeight: 'light',
                        mb: 2,
                      }}
                    >
                      2/1/2022
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    sx={{
                      width: '80px',
                      height: '24px',
                      color: '#495AFF',
                      bgcolor: 'white',
                      fontSize: '10px',
                      align: 'center',
                    }}
                    variant="contained"
                  >
                    Gametitle
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <br />
      
      <Container maxWidth="xl">
      <Typography  sx={{color: "#0ACFFE", fontWeight: '600', fontSize: '16px'}}  >Recent Played</Typography>
      <br></br>

      <Card variant="outlined" 
      sx={{ height: '185px', borderRadius: '10px', border: '1px solid #0ACFFE', backgroundColor: '#2B2B2B'}}>
      <CardMedia
        sx={{ height: 128,
        backgroundColor: 'black',
        borderBottom: '1px solid #0ACFFE',
        color: 'white' }}
        
        image="/assets/images/promotion1.jpeg"
        title="game1"
      >
      
       <Typography 
            sx={{color:'white',fontSize: 16, pl:2,pt:1}}>
              GRANSAGA : UNLIMITED</Typography>
              <img src={promotion1} alt="banner1" style={{maxWidth: "100%"}} />
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
            <Typography 
            sx={{color:'white',fontSize: 14}}>
              #3</Typography>
            <Typography 
            sx={{color:'lightGrey', fontSize: 11}}>
              Ranking</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card> 
    </Container>
    <br/>

    <Container maxWidth="xl">
      <Card variant="outlined" 
      sx={{ height: '185px', borderRadius: '10px', border: '1px solid #0ACFFE', backgroundColor: '#2B2B2B'}}>
      <CardMedia
        sx={{ height: 128,
        backgroundColor: 'black',
        borderBottom: '1px solid #0ACFFE',
        color: 'white' }}
        
        image="/assets/images/theSandboxLogo.svg"
        title="game1"
      >
        <Typography 
            sx={{color:'white',fontSize: 16, pl:2,pt:1}}>
              Aptos Fliip</Typography>
              <img src={promotion2} alt="banner1" style={{maxWidth: "100%"}} />
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
            <Typography 
            sx={{color:'white',fontSize: 14}}>
              #3</Typography>
            <Typography 
            sx={{color:'lightGrey', fontSize: 11}}>
              Ranking</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card> 
    </Container>
    <br/>
    <Container maxWidth="xl">
      <Card variant="outlined" 
      sx={{ height: '185px', borderRadius: '10px', border: '1px solid #0ACFFE', backgroundColor: '#2B2B2B'}}>
      <CardMedia
        sx={{ height: 128,
        backgroundColor: 'black',
        borderBottom: '1px solid #0ACFFE',
        color: 'white' }}
      >
        <Typography 
            sx={{color:'white',fontSize: 16, pl:2,pt:1}}>
             PixelCraft</Typography>
              <img src={promotion4} alt="banner1" style={{maxWidth: "100%"}} />
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
            <Typography 
            sx={{color:'white',fontSize: 14}}>
              #3</Typography>
            <Typography 
            sx={{color:'lightGrey', fontSize: 11}}>
              Ranking</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card> 
    </Container>
    <br/>

    
    </Box>
    </div>
  );
  

}