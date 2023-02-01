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




export default function Explorer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" variant="outlined">Connect Wallet</Button>
        </Toolbar>
      </AppBar>

      <br></br>
      <br></br>
      <br></br>
      
      <Avatar 
      alt="Remy Sharp" 
      src="/static/images/avatar/1.jpg"
      sx={{width: 100, height: 100}} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>User name</Typography>
      <br></br>
      <p>afbb51e46e0f5579ad71ea46c</p>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <h3>Recent Played</h3>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
      <br></br>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
      <br></br>


    </Box>
    
  );
  

}
