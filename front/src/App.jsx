import './App.css'
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import characters from './data.js';


function App() {
  return (
    <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      
    </div>
  )
}

export default App
