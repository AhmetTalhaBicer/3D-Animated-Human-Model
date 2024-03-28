import { Affix, Button } from "@mantine/core";
import { useCharacterAnimations } from "../context/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <Affix position={{ top: "5%", left: "35%" }}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {animations.map((animation, index) => (
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </Button>
        ))}
      </div>
    </Affix>
  );
};

export default Interface;
