import './App.css';
import Navbar from './components/navBar';
import Banner from './components/banner';
import Post from './components/Post';
import Footers from './components/Footers';
import Descrip from './components/Descrip';
import { Partenaire } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Post />
      <Descrip />
      <Partenaire />
      <Footers />
    </div>
  );
}

export default App;
