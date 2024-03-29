/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Character } from "../hooks/useCharacterState";

const Experience = ({ characterIndex }) => {
  const characterComponents = Character;

  const CharacterComponent = characterComponents[characterIndex].component;
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <CharacterComponent />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
