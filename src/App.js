import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from './components/Characters'
import Pages from './components/Pages'

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchApi(info.prev)
  };

  const onNext = () => {
    fetchApi(info.next)
  };

  useEffect(() => {
    fetchApi(initialUrl);
  }, []);
  
  console.log(characters)

  return (
    <>
      <Navbar brand="Rick and morty app" />
      <section className="container mt-5">
      <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters}/>
      <Pages prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </section>
      
    </>
  );
}

export default App;
