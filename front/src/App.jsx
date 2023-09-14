import './App.css'
import Card from '../../../FT-M2/06-React-Intro/homework/02 - Integration/src/components/Card';
import Cards from '../../../FT-M2/06-React-Intro/homework/02 - Integration/src/components/Cards';
import characters, { Rick } from './data.js';


function App() {
  return (
    <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
  )
}

export default App
