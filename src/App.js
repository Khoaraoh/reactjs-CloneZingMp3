import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import MusicPlayer from './Component/MusicPlayer/MusicPlayer';
import HomePage from './Component/Content/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <MusicPlayer/>
      <HomePage/>
    </div>
  );
}

export default App;
