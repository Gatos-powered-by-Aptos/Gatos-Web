import * as React from 'react';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/system';
import Tabs from '@mui/material/Tabs';

import { ReactElement, useEffect, useState, useRef } from 'react';
import { IconButton, Toolbar } from '@mui/material';

export const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton></IconButton>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained'>Connect Wallet</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

const menu = [
    { id: 0, name: 'News' },
    { id: 1, name: 'Reviews' },
    { id: 2, name: 'Leaderboards' },
    { id: 3, name: 'Data Dashboards' }
  ];
      
export const ProductDetail = (): ReactElement => {
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
  function setMenu (index : number) {
    if (menu.length <= index) return; // 예외처리
    
    let top = 0;
    setMenuID(index); 	// (현재클릭된) 메뉴ID를 변경

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
      {/* <Tabs			// 메뉴탭 컴포넌트이다
        items={menu} 		// 메뉴 배열을 받아 보여주고
        activeID={menuID} 	// 클릭된 탭의 메뉴ID 를 내려보내주기도 하고
        setActiveID={setMenuID} // 클릭할 탭의 메뉴ID 를 여기서 조작하게 해주기도 한다.
      /> */}

      <div className="product-content">
        <p>fdfdfdf</p>
      </div>
    </div>
  );
};

export default function GameFeed() {
  return (
    <div>
    <AppBar position='static'>
            <Toolbar>
                <IconButton></IconButton>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained'>Connect Wallet</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    <Button variant="contained">GameFeed</Button>
    </div>
  );
}
