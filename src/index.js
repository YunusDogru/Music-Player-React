import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const songs = [
  {
      title: "Call Me Little Sunshine",
      artist: "Ghost",
      cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/CallMeLittleSunshine.jpg",
      source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/CallMeLittleSunshine.mp3",
      favorited: true
  },
  {
    title: "House Of The Rising Sun",
    artist: "The Animals",
    cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/HouseOfTheRisingSun.jpg",
    source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/HouseOfTheRisingSun.mp3",
    favorited: false
  },
  {
    title: "Calm Like You",
    artist: "The Last Shadow Puppets, Alex Turner",
    cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/CalmLikeYou.jpg",
    source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/CalmLikeYou.mp3",
    favorited: false
  },
  {
      title: "Hero",
      artist: "Family Of The Year",
      cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/Hero.jpg",
      source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/Hero.mp3",
      favorited: false
  },
  {
      title: "Lonely Hunter",
      artist: "Foals",
      cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/LonelyHunter.jpg",
      source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/LonelyHunter.mp3",
      favorited: true
    },
  {
    title: "Livets Ånde",
    artist: "Judah Earl, Hannah McKibben",
    cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/LivetsAnde.jpg",
    source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/LivetsAnde.mp3",
    favorited: false
  },
  {
    title: "Body Paint",
    artist: "Arctic Monkeys",
    cover: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/img/BodyPaint.jpg",
    source: "https://raw.githubusercontent.com/YunusDogru/Music-Player-React/main/mp3/BodyPaint.mp3",
    favorited: true
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App songs={songs}/>
  </React.StrictMode>
);

