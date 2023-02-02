import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { flexbox } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Carousel from 'react-material-ui-carousel'


import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"; 
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



var items = [
  {
    imgAddress:"src/assets/images/promotion1.jpeg"
  },
  {
    imgAddress:"src/assets/images/promotion2.png"
  },
  {
    imaAddress: "src/assets/images/promotion3.png"
  }
];



export default function Explorer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    
  
  
  
  
    );

  


  
  return (
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

      <Carousel>
        {
        items.map(
            (item, i) =>
                <div style={{width: '100%', height: 'auto'}} >
                    <img src={item.imgAddress} style={{width: '100%', height: 'auto'}} />
                </div>
        )
        }   
      </Carousel>

      
      <br></br>
      <br></br>
      <br></br>
      
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{color: "#0ACFFE", fontWeight: '600'}} >Top Rated</Typography>
      </Container>

      <br></br>
      <Container maxWidth="xl">
      <AppBar position="static"
        sx={{backgroundColor:'black'}}>
        <Toolbar>
          <Search sx={{borderRadius: '30px', border: `1px solid #0ACFFE`}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>

      {renderMobileMenu}
      {renderMenu}

      <br></br>
      <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={3.5}>
          <Item
          sx={{backgroundColor: 'white', color: "#495AFF"}}
          >#Metaverse</Item>
        </Grid>
        <Grid item xs={3.5}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#Adventure</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#card</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#Idle</Item>
        </Grid>
        <Grid item xs={3}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#Sports</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#RPG</Item>
        </Grid>
        <Grid item xs={2.3}>
          <Item
          sx={{backgroundColor: '#495AFF', opacity:0.35, color: "white"}}
          >#Moba</Item>
        </Grid>
      </Grid>
    </Container>
      <br></br>
      <br></br>

    <Container maxWidth="xl">
      <Card sx={{ minWidth: 275, display: 'flex', backgroundColor: "#424242", borderRadius: '10px', border: '1px solid #0ACFFE'}}>
        <Box display="flex"
            alignItems="flex-end"
            // justifyContent="flex-end"
            sx={{flexDirection: 'row'}}>
          <CardContent sx={{flex: '1 0 auto'}}>

            
            <Box 
            sx={{backgroundColor: 'white'}}>
              <Typography variant="h5" component="div">
                <Box sx={{fontWeight:'600', color:'white'}}>Game Title</Box>
              </Typography>

              <Typography variant="h6" sx={{  }} color="lightGrey">
                <Box sx={{fontWeight:'light'}}>
                #Metaverse
                </Box>
              </Typography>

              <Box sx={{mb: 3}}></Box>

              <Box display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{flexDirection: 'row'}}>
                <Box display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{flexDirection: 'column',}}>
                  <Typography variant="h5" component="div" sx={{color: 'white'}} align="center">5.0</Typography>
                  <Typography variant="h6" component="div" sx={{color: 'grey', fontWeight: 'light'}} align="center">Rating</Typography>
                </Box>
                <Box display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{flexDirection: 'column', pl: 2}}></Box>
                <Box display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{flexDirection: 'column',}}>
                  <Typography variant="h5" component="div" sx={{color: 'white'}} align="center">776</Typography>
                  <Typography variant="h6" component="div" sx={{color: 'grey', fontWeight: 'light'}} align="center">Users</Typography>
                </Box>
              </Box>
            </Box>
            

          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">Reward</Button>
          </CardActions>
        </Box> 
      </Card>
    </Container>


    </Box>
    
  );
  

}
