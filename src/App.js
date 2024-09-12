import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <SearchBar/>
      <Categories/>
    </div>
  );
}

export default App;
