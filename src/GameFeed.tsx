import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
/* import GFImage from './Desktop/gamefeedimage.jpeg'; */

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

export default function GameFeed() {

  const isMenuOpen = Boolean(anchorEl);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
 /*
const menu = [
    { id: 0, name: 'News' },
    { id: 1, name: 'Reviews' },
    { id: 2, name: 'Leaderboards' },
    { id: 3, name: 'Data Dashboards' }
  ];
      
const ProductDetail = (): ReactElement => {
    const [menuID, setMenuID] = useState(0);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const detailInfoRef = useRef<HTMLDivElement>(null);
    const scrollTarget = useRef<number | null>(null);
    const scrolling = useRef(false);
    const offset = 72; // 탭 높이

     // 스크롤 이벤트 감지
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { capture: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 스크롤하면 탭 자동선택 함수
  function handleScroll (){
    if (!detailInfoRef.current || !document.getElementById('app')) {
      return;
    }

    // 현재 스크롤 위치를 담은 변수
    const scrollTop: number | undefined = document.getElementById('app')?.scrollTop;
    
    if (scrollTop) {
      // 스크롤 하는 중일 경우 → 초기화 해버리자
      if (scrolling.current) { 
        if (!scrollTarget.current || scrollTop === scrollTarget.current) {
          scrollTarget.current = null;
          scrolling.current = false;
        }
        return;
      }

      // id 2,3 부분도 추가해야
      // 상세정보 영역인 경우 → 메뉴ID를 '상세정보'로 변경
      if (scrollTop >= detailInfoRef.current.offsetTop - offset) {
        setMenuID(1);
        
      // 포트폴리오 영역인 경우 → 메뉴ID를 '포트폴리오'로 변경 
      } else if (scrollTop < detailInfoRef.current.offsetTop - offset) {
        setMenuID(0);
      }
    }
  }

  // 클릭시 이동
  function setMenu (index) {
    if (menu.length <= index) return; // 예외처리
    
    let top = 0;
    setMenutID(index); 	// (현재클릭된) 메뉴ID를 변경

    // id 2,3 일 때...
    // '포트폴리오' 영역을 클릭했을 때 (스크롤 위치 설정)
    if (index === 0) {
      if (!portfolioRef.current) return;    
 	  top = portfolioRef.current.offsetTop - offset;
    }
    
    // '상세정보' 영역을 클릭했을 때 (스크롤 위치 설정)
    if (index === 1) {
      if (!detailInfoRef.current) return; 
      top = detailInfoRef.current.offsetTop - offset;
    }
    
    scrollTarget.current = top;
    scrolling.current = true;
    document.getElementById('app')?.scrollTo({ top: top, behavior: 'smooth' });
  }
  
  return (
    <div className="product-detail">
      <Tabs			// 메뉴탭 컴포넌트이다
        items={menu} 		// 메뉴 배열을 받아 보여주고
        activeID={menuID} 	// 클릭된 탭의 메뉴ID 를 내려보내주기도 하고
        setActiveID={setMenuID} // 클릭할 탭의 메뉴ID 를 여기서 조작하게 해주기도 한다.
      />

      <div className="product-content">
        <MarketPortfolio ref={portfolioRef} /> // 각각의 컴포넌트에 useRef 로 DOM 에 접근하자
        <MarketDetailInfo ref={detailInfoRef} />
      </div>
    </div>
  );
}; */


  return (
    <div>
    <AppBar position='static'>
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
                    <Button color="inherit" variant='contained'>Connect Wallet</Button>
            </Toolbar>
    </AppBar>

    <br></br>
    <br></br>
    <br></br>

    <CssBaseline />
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}>Game Image</Box>
    </Container>
      
    <br></br>
    <br></br>


      

    </div>
  );
}
