// useCharacterState.js
import { useState } from "react";
import { Squid, Woman } from "../models";

export const Character = [
  { key: 0, component: Squid },
  { key: 1, component: Woman },
];

export default function useCharacterState() {
  const [characterIndex, setCharacterIndex] = useState(0);

  const nextCharacter = () => {
    setCharacterIndex((prevIndex) => (prevIndex + 1) % Character.length);
  };

  const previousCharacter = () => {
    setCharacterIndex((prevIndex) =>
      prevIndex === 0 ? Character.length - 1 : prevIndex - 1
    );
  };

  return { characterIndex, nextCharacter, previousCharacter };
}
