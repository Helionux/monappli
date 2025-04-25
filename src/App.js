import './App.css';
import Navbar from './navBar';
import Banner from './banner';
import Post from './Post';
import Footers from './Footers';
import Descrip from './Descrip';
import { Partenaire } from './Contact';

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
