import './App.css';
import Card from './components/Card/Card';
import Img1 from "./assets/img1.png";
import Img2 from "./assets/img2.png";
import Img3 from "./assets/img3.png";
import { useState } from 'react';

function App() {
  const cardsData = [
    {
      image: `${Img1}`,
      title: "Munnar Thekkady Alleppey and Kovalam tour",
      duration: "6 Days | 5 Nights",
      price: "25,800",
      oldPrice: "32579",
      pickup: "Cochin Airport / Railway Station"
    },
    {
      image: `${Img2}`,
      title: "Discover Kashmir & Ladak",
      duration: "4 Days | 3 Nights",
      price: "25,800",
      oldPrice: "32579",
      pickup: "Srinagar Airport"
    },
    {
      image: `${Img3}`,
      title: "Cochin Munnar Thekkady and Cherrai tour",
      duration: "3 Days | 2 Nights",
      price: "25,800",
      oldPrice: "32579",
      pickup: "Cochin Airport"
    }
  ];

  const [search, setSearch] = useState("");

  const filteredCards = cardsData.filter((card) =>
    card.pickup.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input
        type="text"
        placeholder='Search by pickup location'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card-container">
        {/* {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            duration={card.duration}
            price={card.price}
            oldPrice={card.oldPrice}
            pickup={card.pickup}
          />
        ))} */}
        {filteredCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

export default App;
