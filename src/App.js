import React, { useState } from "react";
import "./App.css";

const fruitDb = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍓": "Strawberry",
  "🍍": "Pineapple",
  "🍐": "Pear",
  "🍎": "Apple",
  "🫐": "Bluberry",
  "🥝": "Kiwi",
  "🥑": "Avacado",
  "🥭": "Mango",
  "🍋": "Lemon",
  "🍒": "Cherry"
};
let emojiArray = Object.keys(fruitDb);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiEntered(e) {
    var inputEmoji = e.target.value;
    meaning = fruitDb[inputEmoji];
    if (meaning === undefined) {
      meaning = `Sorry we dont have ${inputEmoji} emoji in our databse `;
    }
    setMeaning(meaning);
  }
  function emojiClicked(emojiClicked) {
    meaning = fruitDb[emojiClicked];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fruit Interpreter</h1>
      <p>Click on the below emoji to know the name</p>
      <input
        onChange={emojiEntered}
        placeholder="Enter fruit emoji or press th emoji"
      ></input>
      <h2>{meaning}</h2>

      <div>
        {emojiArray.map((item) => {
          return (
            <span
              onClick={() => emojiClicked(item)}
              className="emoji"
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}