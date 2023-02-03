import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wallet from './test/Wallet'
import NotFound from './Components/NotFound'
import GameFeed from './Components/GameFeed'
import Explorer from './Components/Explorer';
import MyGames from './Components/MyGames';
import Community from './Components/Community';
import Onchain from './test/Test';

function App() {
  return (
  <>
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Explorer />}></Route>
					<Route path="/wallet/*" element={<Wallet />}></Route>
					<Route path="/gamefeed/*" element={<GameFeed />}></Route>
					<Route path="/mygames/*" element={<MyGames />}></Route>
					<Route path="/community/*" element={<Community />}></Route>
					<Route path="/test/*" element={<Onchain />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
	</BrowserRouter>
  </>
);
}

export default App;
