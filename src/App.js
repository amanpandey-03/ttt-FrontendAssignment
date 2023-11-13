// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Userinfo from './components/Userinfo';
import Divider from './components/Divider';


function App() {
  return (
    <div className="App">
      <Header/>
      <Cover/>
      <Userinfo/>
      <Divider/>
    </div>
  );
}

export default App;
