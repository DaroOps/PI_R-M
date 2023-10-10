/* Componentes a renderizar */
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorites from './components/favorites/Favorites';
import Error from './components/error/Error'

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
  // const EMAIL = 'eje@cosa.com';
  // const PASSWORD = '12345678a';

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      console.log(data);
      access && navigate('/home');
    });

   
  }

  useEffect(() => {

    if (!access) {
      navigate('/login');

    }
    else {
      navigate('/home');
    }
    // !access&&navigate('/');

  }, []);
  //#endRegion final simulacion de base de datos

  const onSearch = (id) => {

    if (Number(id) > 826 || Number(id) < 1) {
      return window.alert('¡No hay personajes con este ID!');
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        //console.log(data)
        //console.log(data)
        if (!characters.find(char => char.id ==id)) {
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

    const filterCharacters = characters.filter((character) => character.id != parseInt(id));
    console.log('Called Close event')
    console.log(id)
    console.log(filterCharacters)
    setCharacters(filterCharacters);
  }

  return (
    <div className='App'>

      {useLocation().pathname !== '/login' ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites myFavorites={myFavorites} />} />
        <Route path='/login' element={<Form onLogin={login} />} />
        <Route path='/*' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App
