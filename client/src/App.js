import './App.css';
import {BrowserRouter, Link, Route, Router, Switch} from 'react-router-dom'
import Landing from './pages/Landing';
import Main from './pages/Main';
import Myinfo from './pages/MyPage-myinfo';
import Mylist from './pages/MyPage-mylist';
import StudyRoom from './pages/StudyRoom';
import Note from './pages/Note';
import ReqStudyRoom from './pages/ReqStudyRoom';
import CreateStudyRoom from './pages/CreateStudyRoom'
import Header from './components/Header'
import Menu from './components/Container';
function App() {
  return (
    <>
     <Header/>
     <Menu/>
    <BrowserRouter>
     <Switch>
       <Route exact path="/">
        <Landing/>
       </Route>
       <Route path="/main">
        <Main></Main>
       </Route>
       <Route path="/mypage/myinfo">
        <Myinfo></Myinfo>
       </Route>
       <Route path="/mypage/mylist">
        <Mylist></Mylist>
       </Route>
       <Route path="/studyroom/:id">
        <StudyRoom></StudyRoom>
       </Route>
       <Route path="/note/:id">
        <Note></Note>
       </Route>
       <Route path="/createstudyroom">
        <CreateStudyRoom></CreateStudyRoom>
       </Route>
       <Route path="/reqstudyroom/:id">
        <ReqStudyRoom></ReqStudyRoom>
       </Route>
     </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
