import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wallet from './Wallet'
import NotFound from './NotFound'
import Sample from './Sample'
import GameFeed from './GameFeed'

function App() {
  return (
  <>
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Sample />}></Route>
					<Route path="/wallet/*" element={<Wallet />}></Route>
					<Route path="/gamefeed/*" element={<GameFeed />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
  </>
);
}

export default App;
