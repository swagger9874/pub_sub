import React from 'react';
import PubSub from "./pub_sub/PubSub"
import Cats from "./components/Cats"
import Dogs from "./components/Dogs"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Components from "./components/Components"

function App() {
  const cats = new Cats();
  const dogs = new Dogs();
  const animals = [cats, dogs]
  const card1 = new Card1();
  const card2 = new Card2();
  const cards = [card1,card2]
  const ps = new PubSub(animals,cards);

  return (
    <div className = "container">
      <Components animals = {animals} cards = {cards} pubsub = {ps}/>
    </div>
    
  );
}

export default App;
