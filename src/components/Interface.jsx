/* eslint-disable react/prop-types */
import { Button } from "@mantine/core";
import { Affix } from "@mantine/core";
import { useCharacterAnimations } from "../context/CharacterAnimations";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Interface = ({ onNextCharacter, onPreviousCharacter }) => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  const handleNextCharacter = () => {
    onNextCharacter();
  };

  const handlePreviousCharacter = () => {
    onPreviousCharacter();
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <Button
        onClick={handlePreviousCharacter}
        variant="light"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "10px",
        }}
        sx={{ borderRadius: "10px", padding: "10px 20px" }}
      >
        <FaArrowLeft style={{ marginRight: "0.5rem" }} /> Previous
      </Button>
      <Button
        onClick={handleNextCharacter}
        variant="light"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "10px",
        }}
        sx={{ borderRadius: "10px", padding: "10px 20px" }}
      >
        Next <FaArrowRight style={{ marginLeft: "0.5rem" }} />
      </Button>
      <Affix position={{ top: "5%", left: "35%" }}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
              sx={{ borderRadius: "10px", padding: "10px 20px" }}
              style={{ marginRight: "10px" }}
            >
              {animation}
            </Button>
          ))}
        </div>
      </Affix>
    </div>
  );
};

export default Interface;
