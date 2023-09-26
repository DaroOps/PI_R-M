/* Componentes a renderizar */
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';

/* Hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';

/* Dependencias */
import axios from "axios";


function App() {


  const [characters, setCharacters] = useState([]);

  const myFavorites = useSelector((state) => state.myFavorites);

  //#region  simulacion Base de Datos
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'eje@cosa.com';
  const PASSWORD = '12345678a';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      window.localStorage.setItem('access', true);
      setAccess(true);
      navigate('/home');

      console.log('onAccess ' + window.localStorage.getItem('access'));
    }
    else {
      window.localStorage.setItem('access', false)

      console.log('onFAILAccess ' + window.localStorage.getItem('access'));
    }
  }


 
  useEffect(() => {
    if (!window.localStorage.getItem('access')) {
      if (!access) {
        navigate('/');
      }
      else {
        navigate('/home');
      }
    
    }

    // !access&&navigate('/');

    console.log('on mount ' + window.localStorage.getItem('access'));
  }, []);
  //#endRegion final simulacion de base de datos

  const onSearch = (id) => {

    if (Number(id) > 826 || Number(id) < 1) {
      return window.alert('¡No hay personajes con este ID!');
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        //console.log(data)
        //console.log(data)
        if (!characters.find(char => char.id === parseInt(id))) {
          //window.alert('¡El ID solicitado ya se encuentra en la lista!');
          setCharacters((oldChars) => [...oldChars, data]);
        }


      } else {
        window.alert('¡No hay personajes con este ID!');
      }

    });
  }

  //console.log(characters);

  const onClose = (id) => {

    const filterCharacters = characters.filter((character) => character.id !== parseInt(id));
    console.log('Called Close event')
    console.log(id)
    console.log(filterCharacters)
    setCharacters(filterCharacters);
  }

  return (
    <div className='App'>

      {useLocation().pathname !== '/' ? <Nav onSearch={onSearch} /> : null}
     
      <Routes>
        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites myFavorites={myFavorites} />} />
        <Route path='/' element={<Form onLogin={login} />} />
        <Route path='/*' element={<Error />} />

      </Routes>
      
    </div>
  );
}

export default App
