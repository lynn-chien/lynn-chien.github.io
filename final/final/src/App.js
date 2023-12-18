import React, { useState, useRef } from 'react';
import TortoiseCard from './components/TortoiseCard';
import TortoiseCarousel from './components/TortoiseCarousel';
import './App.css';
import desertSketch from './images/desertSketch.png';
import galapagosSketch from './images/galapagosSketch.png';
import hermannsSketch from './images/hermannsSketch.png';
import indianstarSketch from './images/indianstarSketch.png';
import pancakeSketch from './images/pancakeSketch.png';
import desertColored from './images/desertColored.png';
import galapagosColored from './images/galapagosColored.png';
import hermannsColored from './images/hermannsColored.png';
import indianstarColored from './images/indianstarColored.png';
import pancakeColored from './images/pancakeColored.png';
import dandelions from './images/dandelions.png';
import freshClover from './images/freshClover.png';
import bermudaGrass from './images/bermudaGrass.png';
import orchardGrass from './images/orchardGrass.png';
import rosePetals from './images/rosePetals.png';
import strawberryLeaf from './images/strawberryLeaf.png';
import pricklyPear from './images/pricklyPear.png';
import bambooStalks from './images/bambooStalks.png';
import hibiscus from './images/hibiscus.png';
import carrot from './images/carrot.png';
import honeysuckle from './images/honeysuckle.png';
import watercress from './images/watercress.png';
import bellPeppers from './images/bellPeppers.png';
import romaine from './images/romaine.png';
import nuts from './images/nuts.png';

function App() {
  const [currentTortoise, setCurrentTortoise] = useState({ name: '', facts: '' });
  const [selectedTortoise, setSelectedTortoise] = useState(null);

  const carouselRef = useRef(null);

  const handleTortoiseClick = (tortoise) => {
    setSelectedTortoise(tortoise);
    setTimeout(() => {
      carouselRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const tortoises = [
    { 
      name: "Desert", 
      image: { 
        sketch: desertSketch, 
        colored: desertColored 
      }, 
      facts: "they have surprisingly good hearing",
      images: [
        { src: dandelions, caption: "Dandelions" },
        { src: freshClover, caption: "Fresh Clovers"},
        { src: bermudaGrass, caption: "Bermuda Grass"}
      ]
    },
    { 
      name: "Galapagos", 
      image: { 
        sketch: galapagosSketch, 
        colored: galapagosColored 
      }, 
      facts: "they will walk over to handlers to be fed and coddled",
      images: [
        { src: pricklyPear, caption: "Prickly Pears" },
        { src: bambooStalks, caption: "Bamboo Stalks" },
        { src: hibiscus, caption: "Hibiscus"}
      ]
    },
    { 
      name: "Hermann", 
      image: { 
        sketch: hermannsSketch, 
        colored: hermannsColored 
      }, 
      facts: "they hibernate under piles of dead leaves",
      images: [
        { src: carrot, caption: "Carrots" },
        { src: honeysuckle, caption: "Honeysuckle" },
        { src: watercress, caption: "Watercress"}
      ]
    },
    { 
      name: "Indian Star", 
      image: { 
        sketch: indianstarSketch, 
        colored: indianstarColored 
      }, 
      facts: "they're shy and get stressed when held",
      images: [
        { src: rosePetals, caption: "Rose Petals" },
        { src: orchardGrass, caption: "Orchard Grass" },
        { src: strawberryLeaf, caption: "Strawberry Leaves" }
      ]
    },
    { 
      name: "Pancake", 
      image: { 
        sketch: pancakeSketch, 
        colored: pancakeColored 
      }, 
      facts: "they run when they get scared",
      images: [
        { src: bellPeppers, caption: "Bell Peppers" },
        { src: romaine, caption: "Romaine" },
        { src: nuts, caption: "Nuts" }
      ]
    }
  ];
  
  return (
    <div className="App">
      <div className="tortoise-type">{currentTortoise.name}</div>
      <header className="header">tortoises.</header>
      <div className="tortoise-facts">{currentTortoise.facts}</div>
  
      <div className="tortoise-container">
        {tortoises.map(tortoise => (
          <TortoiseCard
            key={tortoise.name}
            name={tortoise.name}
            image={tortoise.image}
            onMouseEnter={() => setCurrentTortoise({ name: tortoise.name, facts: tortoise.facts })}
            onMouseLeave={() => setCurrentTortoise({ name: '', facts: '' })}
            onClick={() => handleTortoiseClick(tortoise)}
          />
        ))}
      </div>

      <div ref={carouselRef}>
        {selectedTortoise && (
          <TortoiseCarousel images={selectedTortoise.images} /> 
        )}
      </div>
    </div>
  );
        }


export default App;
