import React from 'react';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
    <CardContent>
      <Avatar sx={{ bgcolor: deepOrange[500], mb: 1.5 }}>N</Avatar>
      <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
        Username001
      </Typography>
      <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary">
        2/1/2023
      </Typography>
      <Typography variant="body1">
        Crazy game
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
    <React.Fragment>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 10 }}> G A T O S</Typography>
          <WalletSelector />
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
      

      <CssBaseline />
      
      <br></br>
      <br></br>

      <Box sx={{ borderRadius: '50%', bgcolor: '#cfe8fc', height: '70vh', width: '70vh', mx: 'auto' }}>
      </Box>

      <Box sx={{ borderRadius: '50%', bgcolor: '#cfe8fc', height: '30vh', width: '30vh', mx: 'auto' }}></Box>

      <br />
      <Box sx={{ mr: 'auto' }}>
      <Typography
          textAlign="center"
          variant="h4"
          component="h4"
          >
          Game Name
        </Typography>
      </Box>
      
      <br />

      <div>
        <Stack direction="row" spacing={1} style=
                    {{ justifyContent: 'center' }}>
          <Chip sx={{ borderRadius: 1, height: '6vh' }} label="#Metaverse" size="small" />
        </Stack>
      </div>
            
      <br />
      <br />
      <br />

      <Stack direction="row" spacing={1} style= {{ justifyContent: 'center' }}>
          <Box >
          <StarBorderRoundedIcon sx={{ fontSize: '70px'}} />
          <Typography component="div" sx={{ flexGrow: 1, fontsize: '10px' }}>Ratings</Typography>
          </Box>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '25px' }}>5/5</Typography>

          <Box>
          <PeopleAltOutlinedIcon sx={{ fontSize: '70px' }} />
          <Typography component="div" sx={{ flexGrow: 1, fontsize: '10px' }}>Participants</Typography>
          </Box>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1, fontSize: '25px' }}>5/5</Typography>
      </Stack>

      <br />
      <br />

        <Container maxWidth="xl"><h2>Overview</h2></Container>

        <Typography
          variant="body1"
          component="h4"
          sx={{ display: 'block', paddingLeft: 5, paddingRight: 5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
        
        <br />

      <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Game Feed Tabs" centered>
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="User Reviews" {...a11yProps(1)} />
          <Tab label="Leaderboards" {...a11yProps(2)} />
          <Tab label="Data Dashboards" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      <Container maxWidth="xl"><h2>Trending Community News</h2></Container>
<Box>
    <Container maxWidth="xl">
      <Card>
      <CardMedia
        sx={{ height: 200 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="popularFeed"
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
</Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
    <Container maxWidth="xl"><h2>User Reviews</h2></Container>
<Box maxWidth="xl" sx={{ mx: '7vh' }}>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
</Box>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Container maxWidth="xl"><h2>Leaderboards</h2></Container>

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
    <Button sx={{ paddingTop: '3vh', align: 'right' }}>More</Button>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Container maxWidth="xl"><h2>Data Dashboards</h2></Container>
      </TabPanel>

      </Box>

<br />

<Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 0 }} style={{ justifyContent: 'center' }}>
<Fab variant="extended" sx={{ height: '10vh', mx: 'auto', minWidth: '79vh'}}
onClick={() => { alert('Comming Soon') }}>
  Play
</Fab>
</Box>

<br />
<br />

<Container maxWidth="xl"><h2>User Reviews</h2></Container>

<Box maxWidth="xl" sx={{ mx: '7vh' }}>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
    <Card variant="outlined" sx={{ mb: '3vh'}}>{card}</Card>
</Box>

<br />
<br />

<Container maxWidth="xl"><h2>Leaderboards</h2></Container>

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
    <Button sx={{ paddingTop: '3vh', align: 'right' }}>More</Button>

<br />
<br />

<Container maxWidth="xl" sx={{ display: 'none', displayPrint: 'block' }}>
  <h2>Data Dashboards</h2>
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
  </Container>
  </React.Fragment>
  );
}

export default GameFeed;
