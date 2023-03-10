import { useContext, useEffect, useState } from "react";
import { CharArrayContext } from "./CharArrayContext";
import "./CharList.css";

export default function CharList() {
  const [charArray, setCharArray] = useContext(CharArrayContext);

  return (
    <div id="char-list">
      {charArray.map((char, i) => {
        /*char.img is imported as an object with
          the img url as its value, so this accesses the url
        */
        let img = Object.values(char.img)[0];
        return (
          <div key={i} className={char.hasBeenFound ? "inactive" : ""}>
            <img alt={char.name} src={img}></img>
            <p>{char.name}</p>
          </div>
        );
      })}
    </div>
  );
}
