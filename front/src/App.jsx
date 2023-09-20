import './App.css'

import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import axios from 'axios';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';

function App() {

  const [characters, setCharacters] = useState([]);

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
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={
          <Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
