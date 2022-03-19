import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import MusicPlayer from './Component/MusicPlayer/MusicPlayer';
import Content from './Component/Content/Content';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <MusicPlayer/>
      <Content/>
    </div>
  );
}

export default App;
