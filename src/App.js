// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Userinfo from './components/Userinfo';
import Divider from './components/Divider';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <Header/>
      <Cover/>
      <Userinfo/>
      <Divider/>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  );
}

export default App;
