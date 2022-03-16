import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import MusicPlayer from './Component/MusicPlayer/MusicPlayer';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <MusicPlayer/>
    </div>
  );
}

export default App;
