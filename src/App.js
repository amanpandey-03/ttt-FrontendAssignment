// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Userinfo from './components/Userinfo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cover></Cover>
      <Userinfo/>
    </div>
  );
}

export default App;
