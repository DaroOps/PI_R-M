import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav.jsx';
import Form from './components/form/Form.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/favorites/Favorites';
import ParticlesBackground from './components/ParticlesBackground';
import Error from './components/Error/Error'

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector';

import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const myFavorites = useSelector((state) => state.myFavorites);
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';

    try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(data);

      access && navigate('/home');
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {
    if (!access) {
      navigate('/login');
    }
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if (data.name) {
        if (!characters.find(char => char.id == id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          document.documentElement.style.setProperty('--nav-shadow-status', '#00eeff');
        }
      }
    } catch (error) {
      document.documentElement.style.setProperty('--nav-shadow-status', '#ff0000');
      throw Error(error.message);
    }
  }

  const onClose = (id) => {
    const filterCharacters = characters.filter((character) => character.id != parseInt(id));
    setCharacters(filterCharacters);
  }

  return (
    <div className='App'>
      <ParticlesBackground />
      
      {useLocation().pathname !== '/login' && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites myFavorites={myFavorites} />} />
        <Route path='/login' element={<Form onLogin={login} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;