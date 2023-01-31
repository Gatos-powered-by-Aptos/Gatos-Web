# Gatos UI 
React TS MUI 
react-router-dom
Responsive UI
Aptos TypeScript UI 

## 개발팀 
### 전체 플로우 참고 레퍼런스
https://aptos.dev/tutorials/build-e2e-dapp/e2e-dapp-index 
### 코드 받아서 실행하는 방법 : 모두 npm 통일
(1) npm install 
(2) npm start 
### Merge 규칙 - 브랜치 구분해서 작업하기
commit 메시지 작업 내용 잘 반영하고 작업 단위별로 commit 추천
(1) 각자 작업시, 라이브러리 포함 서로 안겹치는 부분 작업
- 업데이트 시 각자 이름 branch에 푸쉬 -> main에 리드가 PR
- PR 후 머지 완료된 코드 다시 땡겨와서 다시 각자 작업
(2) 머지는 한 사람씩 순차적으로 푸쉬 후 conflict 최소화
(3) Git Graph 사용
### 코드 포맷팅 
(1) eslint
(2) prettier
### Wallet Adapter 
https://aptos.dev/tutorials/build-e2e-dapp/add-wallet-support 
- Petra Wallet 지원 
- Wallet Adapter만 Ant Design으로 작업
- Account Switch의 경우 상태관리가 잘 되고 있음