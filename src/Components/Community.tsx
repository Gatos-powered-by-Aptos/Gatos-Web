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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import popularfeed from '../assets/images/popularfeed.png';

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"; 
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

import { AptosClient } from "aptos"; 
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState, useEffect } from "react";
import { Tab, Tabs } from '@mui/material';

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Column {
  id: 'Number' | 'Username' | 'Level';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: 'Number', label: '#', minWidth: 5 },
  { id: 'Username', label: 'Username', minWidth: 150 },
  {
    id: 'Level',
    label: 'Gatos Level',
    minWidth: 50,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];
interface Data {
  Number: number;
  Username: string;
  Level: number;
}

function createData(
  Number: number,
  Username: string,
  Level: number,
): Data {
  return { Number, Username, Level };
}
const rows = [
  createData(1, 'Username001', 813),
  createData(2, 'Username002', 714),
  createData(3, 'Username003', 701),
  createData(4, 'Username004', 679),
  createData(5, 'Username005', 614),
  createData(6, 'Username006', 523),
  createData(7, 'Username007', 505),
  createData(8, 'Username008', 411),
  createData(9, 'Username009', 323),
  createData(10, 'Username010', 214)
];

function createDashboardData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createDashboardData('00:00', 0),
  createDashboardData('03:00', 300),
  createDashboardData('06:00', 600),
  createDashboardData('09:00', 800),
  createDashboardData('12:00', 1500),
  createDashboardData('15:00', 2000),
  createDashboardData('18:00', 2400),
  createDashboardData('21:00', 2400),
  createDashboardData('24:00', undefined),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Community() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
  
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
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
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                      <WalletSelector />
                  </Toolbar>
              </AppBar>
          </Container>
          <br></br>
          <br></br>
          <br></br>
              <CssBaseline />

              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="LeaderBoards" {...a11yProps(0)} />
                  <Tab label="Game News" {...a11yProps(1)} />
                  <Tab label="User Talk" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <Search sx={{borderRadius: '30px', border: `1px solid #0ACFFE`}}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
              </Search>  
            </Box>
            <TabPanel value={value} index={0}>
                  <Paper sx={{ overflow: 'hidden', ml: '7vh', mr: '7vh' }}>
                    <TableContainer sx={{ maxHeight: 320 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                              return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.Username}>
                                  {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                  <TableCell key={column.id} align={column.align}>
                                          {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                  );
                                })}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>     
            </TabPanel> 

            <TabPanel value={value} index={1}>
                    <Container maxWidth="xl">
                          <Grid container spacing={1}>
                                <Grid item xs={3.5}>
                                <Button variant="contained" disabled>
                                    SEE ALL 
                                </Button>
                                </Grid>
                                <Grid item xs={3.5}>
                                <Button variant="contained">METAPIXEL</Button>
                                </Grid>
                           </Grid>
                      </Container>
                      <Container maxWidth="xl">
                          <Grid container spacing={1}>
                                <Grid item xs={3.5}>
                                <Button variant="contained" disabled>
                                    SEE ALL 
                                </Button>
                                </Grid>
                                <Grid item xs={3.5}>
                                    <Button variant="contained">Telegram</Button>
                                </Grid>
                                <Grid item xs={3.5}>
                                    <Button variant="contained">Twitter</Button>
                                </Grid>
                                <Grid item xs={3.5}>
                                </Grid>
                           </Grid>
                      </Container>
                      <Container maxWidth="xl">
                      <div className="c1image">
                          <img src={popularfeed} alt="main logo"  />
                      </div>
                      </Container>
                  </TabPanel>  

            <TabPanel value={value} index={2}>
                <Container maxWidth="xl">
                              <Grid container spacing={1}>
                                    <Grid item xs={3.5}>
                                    <Button variant="contained">SEE ALL</Button>
                                    </Grid>
                                    <Grid item xs={3.5}>
                                    <Button variant="contained">Game Title</Button>
                                    </Grid>
                              </Grid>
                          </Container>
                </TabPanel> 
     </div>    
  );
}
