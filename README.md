# Gatos UI 
React TS MUI 
react-router-dom
Responsive UI
Aptos TypeScript UI 

## 개발팀 
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

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
