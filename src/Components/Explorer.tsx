import * as React from 'react';
import Button from '@mui/material/Button';
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
import Paper from '@mui/material/Paper';
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
import Carousel from 'react-material-ui-carousel';
import { Link } from "react-router-dom";


import promotion1 from '../assets/images/promotion1.jpeg';
import promotion2 from '../assets/images/promotion2.png';
import promotion3 from '../assets/images/promotion3.png';
import promotion4 from '../assets/images/promotion4.jpeg';
import gatosLogo from '../assets/images/GATOS.png';

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

const drawerWidth = 240;
const navItems = ['Home', 'Explorer', 'My Games', 'Community','B'];


export default function Explorer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Link to="/test">Test</Link>
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


      <Carousel>
          <div className="c1image">
            <img src={promotion1} alt="banner1" style={{maxWidth: "100%"}} />
          </div>
          <div className="c1image">
            <img src={promotion2} alt="banner1" style={{maxWidth: "100%"}}/>
          </div>
          <div className="c1image">
            <img src={promotion3} alt="banner1" style={{maxWidth: "100%"}}/>
          </div>
      </Carousel>

      
      <br></br>
      
      <Container maxWidth="xl">
        <Typography sx={{color: "#0ACFFE", fontWeight: '600', fontSize: '16px', pb:1}} >Top Rated</Typography>
      </Container>
      <Container maxWidth="xl">
      <AppBar position="static"
        sx={{backgroundColor:'black'}}>
        <Toolbar>
          <Search sx={{borderRadius: '30px', border: `1px solid #0ACFFE` }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
            <IconButton
              size="small"
              edge="end"
              aria-label="sortby"
              sx={{color:'white'}}><ArrowDropDownIcon/></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>

      <br></br>
      
      
      <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={3.5}>
          <Item
            sx={{backgroundColor: 'white',  color: "#495AFF"}}
            >#Metaverse</Item>
        </Grid>
        <Grid item xs={3.5}>
          <Item
          sx={{backgroundColor: '#292F68',  color: "#495AFF"}}
          >#Adventure</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#292F68',  color: "#495AFF"}}
          >#card</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#292F68', color: "#495AFF"}}
          >#Idle</Item>
        </Grid>
        <Grid item xs={3}>
          <Item
          sx={{backgroundColor: '#292F68', color: "#495AFF"}}
          >#Sports</Item>
        </Grid>
        <Grid item xs={2}>
          <Item
          sx={{backgroundColor: '#292F68',  color: "#495AFF"}}
          >#RPG</Item>
        </Grid>
        <Grid item xs={2.3}>
          <Item
          sx={{backgroundColor: '#292F68',  color: "#495AFF"}}
          >#Moba</Item>
        </Grid>
      </Grid>
    </Container>
      <br></br>
      <br></br>


      {/* 게임 카드 */}
      <Container maxWidth="xl">
      <Card
        sx={{
          height: '120px',
          minWidth: 275,
          display: 'flex',
          backgroundColor: '#424242',
          borderRadius: '10px',
          border: '1px solid #0ACFFE',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: '16px' }} component="div">
                    <Box sx={{ fontWeight: '600', color: 'white' }}>
                      GRANSAGA
                    </Box>
                  </Typography>

                  <Typography sx={{ fontSize: '14px' }} color="lightGrey">
                    <Box sx={{ fontWeight: 'light' }}>#Metaverse</Box>
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}></Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexDirection: 'row' }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      5.0
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Rating
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column', pl: 2 }}
                  ></Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      776
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Users
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={2}>
            <Box
              display="flex"
              alignItems="flex-end"
              sx={{ flexDirection: 'column' }}
            >
              <Box sx={{ mb: 9 }}></Box>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '12px', color:'black', bgcolor:'#0ACFFE' }}
                >
                  Reward
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={4}>
            
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box>
                </Box>
                <Card
                  sx={{
                    width: '100%',
                    height: '150px',
                    display: 'flex',
                    backgroundColor: '#424242',
                    borderRadius: '10px',
                    border: '1px solid #0ACFFE',
                  }}
                >
                   <img src={promotion1} alt="banner1" style={{maxWidth: "100%", height:"100%"}} />
                </Card>
              </Box>
            
          </Grid>
        </Grid>
      </Card>
    </Container>
    <br/>
    
    <Container maxWidth="xl">
      <Card
        sx={{
          height: '120px',
          minWidth: 275,
          display: 'flex',
          backgroundColor: '#424242',
          borderRadius: '10px',
          border: '1px solid #0ACFFE',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: '16px' }} component="div">
                    <Box sx={{ fontWeight: '600', color: 'white' }}>
                      PixelCraft
                    </Box>
                  </Typography>

                  <Typography sx={{ fontSize: '14px' }} color="lightGrey">
                    <Box sx={{ fontWeight: 'light' }}>#Metaverse</Box>
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}></Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexDirection: 'row' }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      5.0
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Rating
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column', pl: 2 }}
                  ></Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      776
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Users
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={2}>
            <Box
              display="flex"
              alignItems="flex-end"
              sx={{ flexDirection: 'column' }}
            >
              <Box sx={{ mb: 9 }}></Box>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '12px', color:'black', bgcolor:'#0ACFFE' }}
                >
                  Reward
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={4}>
            
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box ></Box>
                <Card
                  sx={{
                    width: '100%',
                    height: '150px',
                    display: 'flex',
                    backgroundColor: '#424242',
                    borderRadius: '10px',
                    border: '1px solid #0ACFFE',
                  }}
                >
                   <img src={promotion4} alt="banner1" style={{maxWidth: "100%", height:"100%"}} />
                </Card>
              </Box>
            
          </Grid>
        </Grid>
      </Card>
    </Container>
    <br/>

    <Container maxWidth="xl">
      <Card
        sx={{
          height: '120px',
          minWidth: 275,
          display: 'flex',
          backgroundColor: '#424242',
          borderRadius: '10px',
          border: '1px solid #0ACFFE',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: '16px' }} component="div">
                    <Box sx={{ fontWeight: '600', color: 'white' }}>
                      Aptos Flip
                    </Box>
                  </Typography>

                  <Typography sx={{ fontSize: '14px' }} color="lightGrey">
                    <Box sx={{ fontWeight: 'light' }}>#Metaverse</Box>
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}></Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexDirection: 'row' }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      5.0
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Rating
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column', pl: 2 }}
                  ></Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: 'white', fontSize: '14px' }}
                      align="center"
                    >
                      776
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        color: 'grey',
                        fontWeight: 'light',
                        fontSize: '11px',
                      }}
                      align="center"
                    >
                      Users
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={2}>
            <Box
              display="flex"
              alignItems="flex-end"
              sx={{ flexDirection: 'column' }}
            >
              <Box sx={{ mb: 9 }}></Box>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '12px', color:'black', bgcolor:'#0ACFFE' }}
                >
                  Reward
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={4}>
            
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}
              >
                <Box></Box>
                <Card
                  sx={{
                    width: '100%',
                    height: '150px',
                    display: 'flex',
                    backgroundColor: '#424242',
                    borderRadius: '10px',
                    border: '1px solid #0ACFFE',
                  }}
                >
                   <img src={promotion2} alt="banner1" style={{maxWidth: "100%", height:"100%"}} />
                </Card>
              </Box>
            
          </Grid>
        </Grid>
      </Card>
    </Container>
    <br/>
    <br/>
    <br/>



    </Box>
  </div>
  );
  

}
