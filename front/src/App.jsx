import './App.css'
import Cards from './components/Cards/Cards';
import characters from './data.js';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className='App'>
         <Nav onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      
    </div>
  )
}

export default App
