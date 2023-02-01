import * as React from 'react';
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Stack } from '@mui/system';
import Avatar from '@mui/material/Avatar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';


import { ReactElement } from 'react';
import { IconButton, Tab, Toolbar } from '@mui/material';
import Tabs from '@mui/material/Tabs';

import useMoveScroll from './hooks/useMoveScroll';
// 유진아 위에 navbar은 연우가 만들었고 어차피 wallet adapter 갔다 쓸거여서 밑에 내용 먼저 만들면 될 것 같아!
// game feed 주소 뒤에 붙는 게임 명으로 라우팅해야됨 - 주원 

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

const GameFeed = (): ReactElement => {

  const goodsTabs = {
    0: useMoveScroll('News'),
    1: useMoveScroll('Reviews'),
    2: useMoveScroll('Leader Boards'),
    3: useMoveScroll('Data Dashboards'),
    length: 4,
  };

  {Array.from(goodsTabs).map((tab, index) => {
    console.log(tab.name, index)
  })}

  return (
    <>
        <AppBar position='static'>
          <Toolbar>
            <IconButton>냅두기</IconButton>
            <Stack direction='row' spacing={2}>
              <Button variant='contained'>Connect Wallet</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Avatar
          alt="Fox"
          src="/assets/Fox_2178.png"
          sx={{ width: '100%', height: '%100%' }} />
        <Typography
          variant="h4"
          component="h4"

        >
          Game Name
        </Typography>
        <Typography
          variant="h4"
          component="h4"

        >
          Overview
        </Typography>
        <Typography
          variant="h4"
          component="h4"
        >
          Description
        </Typography>
        
        <div ref={goodsTabs[0].element}>
        News로 옵니다
        </div>
      
        <div ref={goodsTabs[1].element}>
        User Reviews로 옵니다 
        </div>
      
        <div ref={goodsTabs[2].element}>
        Leaderboards로 옵니다
        </div>

        <div ref={goodsTabs[3].element}>
        Data Dashboards로 옵니다
        </div>
    </>
  );
}

export default GameFeed;
