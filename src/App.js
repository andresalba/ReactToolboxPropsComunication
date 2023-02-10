import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';

function App() {

  const [cards, setCards] = useState([{ title: 'titulo1'}])

  const changeButton = (data) => {
    //setCards([...cards, { title: data }])
    setCards((currentCards) => [...currentCards, { title: data }])//best practice
    console.log('title, cards: ',data, cards)
  }

  return (
    <div className="App">
      <h1>Props Comunication</h1>
      <Button butMsg={changeButton}/>
      {cards.map(
        (card, index) => <Card key={index} nume={index +1} title={card.title}/>
      )}
    </div>
  );
}

export default App;
