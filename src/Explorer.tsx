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
        </Toolbar>
      </AppBar>
      </Container>
      <br></br>
      <br></br>
      <br></br>

      <Container maxWidth="sm">
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: '#cfe8fc', height: '50vh', borderRadius: '10px' }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1}} align="center">Promotion</Typography>
        </Box>
      </Container>
      
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
          <Button
          sx={{size:'large'}}>
            <Item>#Metaverse</Item>
          </Button>
          
        </Grid>
        <Grid item xs={3.5}>
          <Button>
            <Item>#Metaverse</Item>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Item>Genre3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Genre4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Genre5</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Genre6</Item>
        </Grid>
        <Grid item xs={2.3}>
          <Item>Genre7</Item>
        </Grid>
      </Grid>
    </Container>
      <br></br>
      <br></br>

    <Container maxWidth="xl">
      <Card sx={{ minWidth: 275, display: 'flex' }}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{flex: '1 0 auto'}}>
            <Typography variant="h5" component="div">
            Game Title #Genre
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            5.0 / 776 users
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined">1 Apt</Button>
          </CardActions>
        </Box> 
  
        <Box sx={{display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/asset/theSandboxLogo.svg"
            alt="theSandboxLogo"/>
        </Box>
      
    </Card>



    <br></br>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Game Title #Genre
        </Typography>
        <Typography sx={{ ㅊ: 1.5 }} color="text.secondary">
        5.0 / 776 users
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">1 Apt</Button>
      </CardActions>
    </Card>
      <br></br>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Game Title #Genre
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        5.0 / 776 users
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">1 Apt</Button>
      </CardActions>
    </Card>
      <br></br>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
         Game Title #Genre
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        5.0 / 776 users
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">1 Apt</Button>
      </CardActions>
    </Card>
      <br></br>
    </Container>
    </Box>
    
  );
  

}
