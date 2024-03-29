/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/CharacterAnimations";

const Robot = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/robot.glb");
  const { setAnimations, animationIndex } = useCharacterAnimations();

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names, setAnimations]);

  useEffect(() => {
    if (actions[names[animationIndex]]) {
      actions[names[animationIndex]].reset().fadeIn(0.5).play();
      return () => {
        if (actions[names[animationIndex]]) {
          actions[names[animationIndex]].fadeOut(0.5);
        }
      };
    }
  }, [actions, animationIndex, names]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Pathfinder_v20" rotation={[Math.PI / 2, 0, 0]}>
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.pathfinder_head_boosted}
            skeleton={nodes.Head.skeleton}
          />
          <skinnedMesh
            name="Gear"
            geometry={nodes.Gear.geometry}
            material={materials.pathfinder_gear_boosted}
            skeleton={nodes.Gear.skeleton}
          />
          <skinnedMesh
            name="Emote"
            geometry={nodes.Emote.geometry}
            material={materials.pathfinder_boosted_emotes}
            skeleton={nodes.Emote.skeleton}
          />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.pathfinder_body_boosted}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Zipline"
            geometry={nodes.Zipline.geometry}
            material={materials.pathfinder_zipline_boosted}
            skeleton={nodes.Zipline.skeleton}
          />
          <skinnedMesh
            name="Hand_01"
            geometry={nodes.Hand_01.geometry}
            material={materials.pathfinder_body_boosted}
            skeleton={nodes.Hand_01.skeleton}
          />
        </group>
        <group name="Joints">
          <group name="jx_c_delta" rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <primitive object={nodes.def_c_hip} />
            <group name="jx_c_start" />
            <group name="jx_c_pov" position={[0, 0, -0.693]}>
              <group name="jx_c_camera" />
            </group>
          </group>
        </group>
        <group name="Default_light" />
      </group>
    </group>
  );
};
export default Robot;
useGLTF.preload("/models/robot.glb");
