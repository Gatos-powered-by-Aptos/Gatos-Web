import React from 'react';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { positions } from '@mui/system';

import popularfeed from '../assets/images/popularfeed1.png';
import gatoslogo from '../assets/images/gatoslogo1.png';
import userreview from '../assets/images/review.png';
import gameimg from '../assets/images/gamefeedimg.png';
import ddb1 from '../assets/images/dashboard1.png';
import ddb2 from '../assets/images/dashboard2.png';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

import { ReactElement } from 'react';
import { IconButton, Tab, Toolbar } from '@mui/material';
import Tabs from '@mui/material/Tabs';

import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Navbar/Navbar';

const darkTheme = createTheme({
  palette: {
    
    mode: 'dark',
    
  primary: {
      light: '#757ce8',
      main: '#495AFF',
      dark: '#002884',
      contrastText: '#495AFF',
  },
  secondary: {
    light: '#ff7961',
    main: '#0ACFFE',
    dark: '#ba000d',
    contrastText: '#495AFF',
  },
},
});



//https://github.com/mui/material-ui/blob/v5.11.7/docs/data/material/getting-started/templates/dashboard/Chart.tsx 
// 데이터 대시보드 구현 참고 레퍼런스 
// 샘플 차트 페이지: https://mui.com/material-ui/getting-started/templates/dashboard/ 

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

const card = (
  <React.Fragment>
    <CardContent sx={{ maxWidth: 'xl' }}>
      <Avatar sx={{ bgcolor: deepOrange[500], mb: 1.5 }}>N</Avatar>
      <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
        Irene Lee 
      </Typography>
      <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary">
        2/1/2023
      </Typography>
      <Typography variant="body1">
        Crazy game!
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

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




const GameFeed = (): ReactElement => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // data dashboard 
  const theme = useTheme();

  return (
    
    <Box sx={{ flexGrow: 1, backgroundColor: 'black', height: 'auto', width: 'auto' }}>
    <React.Fragment>
       <Navbar/>
        <br></br>
        <br></br>
      

      <CssBaseline />
      
      <br></br>
      <br></br>

      <Box sx={{ borderRadius: '50%', bgcolor: '#cfe8fc', height: '30vh', width: '30vh', mx: 'auto' }}>
      <div>
      <img style={{ borderRadius: '50%' }} src={gameimg} alt="logo" height="auto" width="100%" />
      </div>
      </Box>

      <br />
      <Box sx={{ mr: 'auto', mb: '1vh' }}>
      <Typography
          textAlign="center"
          variant="h6"
          component="h6"
          color="white"
          >
          GRANSAGA : UNLIMITED 
        </Typography>
      </Box>

      <div>
      <ThemeProvider theme={darkTheme}>
        <Stack direction="row" spacing={1} style={{ justifyContent: 'center' }}>
          <Button sx={{borderRadius: 1, height: '3vh', bgcolor: '#FFFFFF'}}>
            <Typography sx={{color: 'primary', fontSize: '1.5vh'}}>#Metaverse</Typography>
          </Button>
        </Stack>
      </ThemeProvider>
      </div>
            
      <br />

      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{flexDirection: 'row'}}>
        <Box display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{flexDirection: 'row', mr: '4vh'}}>
          <Box display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{flexDirection: 'column', mr: '1vh'}}>
            <StarBorderRoundedIcon sx={{fontSize: 50, color: 'lightGrey'}} />
            <Typography variant="h6" component="div" sx={{color: 'lightGrey', fontSize: 15}} align="center">Ratings</Typography>
            
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}></Typography>
          <Typography variant="h3" sx={{color: "#0ACFFE", fontSize: 35, mb: '2.5vh'}} align="center" >5/5</Typography>
        </Box>
        <Box display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{flexDirection: 'row'}}>
          <Box display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{flexDirection: 'column',}}>
            <PeopleAltOutlinedIcon sx={{fontSize: 50, color: 'lightGrey', mr: '0vh'}} />
            <Typography variant="h6" component="div" sx={{color: 'lightGrey', fontSize: 15, mr: '0vh'}} align="center">Participants</Typography>
            
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}></Typography>
          <Typography variant="h3" sx={{color: "#0ACFFE", fontSize: 35, mb: '2.5vh'}} align="center" >4928</Typography>
        </Box>
        </Box>
        </Container>

      <br />
      <br />

        <Container maxWidth="xl" sx={{ ml: '2.8vh', color: '#0ACFFE' }}><h2>Overview</h2></Container>

        <Typography
          variant="body1"
          component="h4"
          sx={{ display: 'block', paddingLeft: 5, paddingRight: 5, color: 'white' }}
        >
         Gran Saga: Unlimited 

METAPIXEL's flagship PC MMORPG based on the popular Gran Saga IP.

Player testing starts Q1. Full launch in 2023. 

Get ready for a new level of web3 gaming.
        </Typography>
        
        <br />

      <Box sx={{ height: 'auto', width: '100%' }}>

      <ThemeProvider theme={darkTheme}>
      <Box display="center" alignItems="center" justifyContent="center" sx={{ width: '100%', borderBottom: 1, borderColor: 'black', bgcolor: 'backgroundcolor.paper' }}>
        <Tabs
        value={value} 
        onChange={handleChange} 
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        sx={{ height: '2vh', width: '80%' }}
        aria-label="Game Feed Tabs"
        >
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="User Reviews" {...a11yProps(1)} />
          <Tab label="Leaderboards" {...a11yProps(2)} />
          <Tab label="Data Dashboards" {...a11yProps(3)} />
        </Tabs>
      </Box>
      </ThemeProvider>

      <TabPanel value={value} index={0}>
      <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Trending Community News</h2></Container>
<Box>
    <Container maxWidth="xl">
    <ThemeProvider theme={darkTheme}>
      <Card>
      <CardMedia
        sx={{ height: '90vh', width: '100%' }}
        image={popularfeed}
        title="popularFeed"
      />
      <CardActions sx={{ bgcolor: 'black' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </ThemeProvider>
    </Container>
</Box>
<br />
<Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>User Reviews</h2></Container>
<Box maxWidth="xl" sx={{ mx: '1.2vh' }}>
    <div>
      <img src={userreview} alt="logo" height="auto" width="100%" />
      <br />
      <img src={userreview} alt="logo" height="auto" width="100%" />
      <br />
      <img src={userreview} alt="logo" height="auto" width="100%" />
    </div>
</Box>
<br />
<Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Leaderboards</h2></Container>

      <ThemeProvider theme={darkTheme}>
<Paper sx={{ overflow: 'hidden', ml: '1.2vh', mr: '1.2vh' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
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
    <Button sx={{ paddingTop: '1.5vh', color: 'white', float: 'right', fontSize: '1.5vh' }}>More</Button>
    </ThemeProvider>
    <br />
    <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Data Dashboards</h2></Container>
        <div>
      <img src={ddb1} alt="logo" height="auto" width="100%" />
      <br />
      <br />
      <img src={ddb2} alt="logo" height="auto" width="100%" />
    </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
    <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>User Reviews</h2></Container>
<Box maxWidth="xl" sx={{ mx: '1.2vh' }}>
    <div>
      <img src={userreview} alt="logo" height="auto" width="100%" />
      <br />
      <img src={userreview} alt="logo" height="auto" width="100%" />
      <br />
      <img src={userreview} alt="logo" height="auto" width="100%" />
    </div>
</Box>
<br />
<Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Leaderboards</h2></Container>

      <ThemeProvider theme={darkTheme}>
<Paper sx={{ overflow: 'hidden', ml: '1.2vh', mr: '1.2vh' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
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
    <Button sx={{ paddingTop: '1.5vh', color: 'white', float: 'right', fontSize: '1.5vh' }}>More</Button>
    </ThemeProvider>
    <br />
    <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Data Dashboards</h2></Container>
        <div>
      <img src={ddb1} alt="logo" height="auto" width="100%" />
      <br />
      <br />
      <img src={ddb2} alt="logo" height="auto" width="100%" />
    </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Leaderboards</h2></Container>

      <ThemeProvider theme={darkTheme}>
<Paper sx={{ overflow: 'hidden', ml: '1.2vh', mr: '1.2vh' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
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
    <Button sx={{ paddingTop: '1.5vh', color: 'white', float: 'right', fontSize: '1.5vh' }}>More</Button>
    </ThemeProvider>
    <br />
    <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Data Dashboards</h2></Container>
        <div>
      <img src={ddb1} alt="logo" height="auto" width="100%" />
      <br />
      <br />
      <img src={ddb2} alt="logo" height="auto" width="100%" />
    </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Container maxWidth="xl" sx={{ color: '#0ACFFE' }}><h2>Data Dashboards</h2></Container>
        <div>
      <img src={ddb1} alt="logo" height="auto" width="100%" />
      <br />
      <br />
      <img src={ddb2} alt="logo" height="auto" width="100%" />
    </div>
      </TabPanel>

      </Box>

<br />
<br />

<ThemeProvider theme={darkTheme}>
<Container maxWidth="xl" sx={{ justifyContent: 'center', width: '100%', display: 'flex' }}>
<Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 2 }}>
<Fab variant="extended" color="primary" sx={{ height: '8vh', width: '40.8vh' }}
onClick={() => { alert('Comming Soon') }}>
  <Typography sx={{color: 'black'}}>Play</Typography>
</Fab>
</Box>
</Container>
</ThemeProvider>



  /*
  <Box sx={{border:1}}>
  <ResponsiveContainer>
    <>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
        </>
      </ResponsiveContainer>
      </Box>
  </React.Fragment>
  */
  </Box>
  
  );
}

export default GameFeed;
