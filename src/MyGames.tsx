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




export default function Explorer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
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
      </Container>
      <br></br>
      <br></br>
      <br></br>
      
      <Container maxWidth="xl">
      <Box display="flex"
      alignItems="center"
      justifyContent="center">
      <Avatar 
      alt="Remy Sharp" 
      src="/static/images/avatar/1.jpg"
      sx={{width: 100, height: 100}}
       />
      </Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">User name</Typography>
      <br></br>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1 }} align="center">afbb51e46e0f5579ad71ea46c</Typography>
      </Container>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <Container maxWidth="xl><h3>Recent Played</h3></Container>
      
      
      <Container maxWidth="xl">
      <Card sx={{ }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </Container>
      <br></br>

    <Container maxWidth="xl">
      <Card>
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </Container>
      <br></br>
    </Box>
    
  );
  

}
