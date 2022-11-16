import './App.css';
import Content from './Components/Content/Content';
import FirstPage from './Components/FirstPage/FirstPage';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar/>
      <FirstPage/>
      <Content/>
    </div>
  );
}

export default App;
