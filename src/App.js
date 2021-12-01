import "./App.css";
import { useState } from "react";
import Card from "./Card";

const musicDB = {
  Rap: [
    { name: "Rap God", rating: "5/5" },
    { name: "Gumaan", rating: "3.5/5" },
    { name: "3:59", rating: "4.5/5" },
  ],

  Hindi: [
    {
      name: "Tum Sath Ho",
      rating: "5/5",
    },
    {
      name: "Rajhanna",
      rating: "4.5/5",
    },
    {
      name: "Dilo ka shooter hei mera scooter",
      rating: "4.5/5",
    },
  ],
  Pop: [
    {
      name: "Young Nights",
      rating: "4.5/5",
    },
    {
      name: "Wating for love ",
      rating: "5/5",
    },
    {
      name: "Hymm for the weekend",
      rating: "4/5",
    },
  ],
};

function App() {
  const [selectedGenre, setGenre] = useState("Rap");

  return (
    <>
      <div className="wrapper">
        <p> Music Recommendation </p>
        <span> a React web app Recommand fav. Music Tracks</span>
      </div>

      <div className="box">
        {Object.keys(musicDB).map((genre) => (
          <button onClick={() => setGenre(genre)}>{genre}</button>
        ))}
      </div>

      {musicDB[selectedGenre].map((music) => (
        <Card musicTitle={music.name} rating={music.rating} />
      ))}     
    </>
  );
}

export default App;
