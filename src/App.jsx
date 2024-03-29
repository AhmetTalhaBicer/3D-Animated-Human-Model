// App.jsx
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experince";
import Interface from "./components/Interface";
import useCharacterState from "./hooks/useCharacterState";

function App() {
  const { characterIndex, nextCharacter, previousCharacter } =
    useCharacterState();

  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Experience characterIndex={characterIndex} />
      </Canvas>
      <Interface
        characterIndex={characterIndex}
        onNextCharacter={nextCharacter}
        onPreviousCharacter={previousCharacter}
      />
    </>
  );
}

export default App;
