/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/CharacterAnimations";

const Squid = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/red.glb");
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
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes.root} />
          <skinnedMesh
            name="characters_01"
            geometry={nodes.characters_01.geometry}
            material={materials.red}
            skeleton={nodes.characters_01.skeleton}
          />
        </group>
        <group name="metarig">
          <group
            name="spine"
            position={[0, 0.234, -0.014]}
            rotation={[0.226, 0, 0]}
          >
            <group
              name="spine001"
              position={[0, 0.043, 0]}
              rotation={[-0.131, 0, 0]}
            >
              <group
                name="spine002"
                position={[0, 0.045, 0]}
                rotation={[-0.126, 0, 0]}
              >
                <group
                  name="spine003"
                  position={[0, 0.044, 0]}
                  rotation={[0.005, 0, 0]}
                >
                  <group
                    name="shoulderR"
                    position={[-0.005, 0.039, 0.02]}
                    rotation={[-1.545, -0.001, 1.039]}
                  >
                    <group
                      name="upper_armR"
                      position={[-0.005, 0.056, -0.006]}
                      rotation={[1.51, -1.301, 2.405]}
                    >
                      <group
                        name="forearmR"
                        position={[0, 0.08, 0]}
                        rotation={[0.211, -0.065, -0.004]}
                      >
                        <group
                          name="handR"
                          position={[0, 0.101, 0]}
                          rotation={[0.046, -0.171, 0.011]}
                        >
                          <group
                            name="thumb01R"
                            position={[-0.005, 0.006, 0.013]}
                            rotation={[-2.581, -0.068, 2.777]}
                          >
                            <group
                              name="thumb02R"
                              position={[0, 0.025, 0]}
                              rotation={[0.211, 0, -0.056]}
                            />
                          </group>
                          <group
                            name="f_middle01R"
                            position={[-0.002, 0.037, 0.002]}
                            rotation={[1.168, -1.138, 1.238]}
                          >
                            <group
                              name="f_middle02R"
                              position={[0, 0.011, 0]}
                              rotation={[0.51, 0, 0.037]}
                            />
                          </group>
                          <group
                            name="f_pinky01R"
                            position={[-0.003, 0.032, -0.019]}
                            rotation={[0.928, -0.842, 1.142]}
                          >
                            <group
                              name="f_pinky02R"
                              position={[0, 0.013, 0]}
                              rotation={[0.571, 0, 0.116]}
                            />
                          </group>
                          <group
                            name="f_index01R"
                            position={[-0.001, 0.036, 0.013]}
                            rotation={[1.31, -1.013, 1.308]}
                          >
                            <group
                              name="f_index02R"
                              position={[0, 0.012, 0]}
                              rotation={[0.457, 0, 0.027]}
                            />
                          </group>
                          <group
                            name="f_ring01R"
                            position={[-0.002, 0.034, -0.009]}
                            rotation={[1.095, -1.133, 1.233]}
                          >
                            <group
                              name="f_ring02R"
                              position={[0, 0.014, 0]}
                              rotation={[0.517, 0, -0.015]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="spine004"
                    position={[0, 0.053, 0]}
                    rotation={[-0.034, 0, 0]}
                  >
                    <group
                      name="spine006"
                      position={[0, 0.049, 0]}
                      rotation={[0.069, 0, 0]}
                    >
                      <group
                        name="pivot001"
                        position={[0, 0.006, 0.074]}
                        rotation={[1.764, 0, 0]}
                      />
                      <group
                        name="eyebrowsR"
                        position={[-0.073, 0.16, 0.146]}
                        rotation={[-0.009, 0, 0]}
                      />
                      <group
                        name="eyeL"
                        position={[0.067, 0.095, 0.079]}
                        rotation={[-1.579, 0, Math.PI]}
                      />
                      <group
                        name="cheekR"
                        position={[-0.074, 0.029, 0.133]}
                        rotation={[-0.009, 0, 0]}
                      />
                      <group
                        name="eyelidsL"
                        position={[0.067, 0.095, 0.079]}
                        rotation={[-1.579, 0, -Math.PI]}
                      />
                      <group
                        name="cheekL"
                        position={[0.074, 0.029, 0.133]}
                        rotation={[-0.009, 0, 0]}
                      />
                      <group
                        name="eyebrowsL"
                        position={[0.073, 0.16, 0.146]}
                        rotation={[-0.009, 0, 0]}
                      />
                      <group
                        name="eyeR"
                        position={[-0.067, 0.095, 0.079]}
                        rotation={[-1.579, 0, Math.PI]}
                      />
                      <group
                        name="eyelidsR"
                        position={[-0.067, 0.095, 0.079]}
                        rotation={[-1.579, 0, -Math.PI]}
                      />
                    </group>
                  </group>
                  <group
                    name="shoulderL"
                    position={[0.005, 0.039, 0.02]}
                    rotation={[-1.545, 0.001, -1.039]}
                  >
                    <group
                      name="upper_armL"
                      position={[0.005, 0.056, -0.006]}
                      rotation={[1.51, 1.301, -2.405]}
                    >
                      <group
                        name="forearmL"
                        position={[0, 0.08, 0]}
                        rotation={[0.211, 0.065, 0.004]}
                      >
                        <group
                          name="handL"
                          position={[0, 0.101, 0]}
                          rotation={[0.046, 0.171, -0.011]}
                        >
                          <group
                            name="f_middle01L"
                            position={[0.002, 0.037, 0.002]}
                            rotation={[1.168, 1.138, -1.238]}
                          >
                            <group
                              name="f_middle02L"
                              position={[0, 0.011, 0]}
                              rotation={[0.51, 0, -0.037]}
                            />
                          </group>
                          <group
                            name="f_pinky01L"
                            position={[0.003, 0.032, -0.019]}
                            rotation={[0.928, 0.842, -1.142]}
                          >
                            <group
                              name="f_pinky02L"
                              position={[0, 0.013, 0]}
                              rotation={[0.571, 0, -0.116]}
                            />
                          </group>
                          <group
                            name="f_ring01L"
                            position={[0.002, 0.034, -0.009]}
                            rotation={[1.095, 1.133, -1.233]}
                          >
                            <group
                              name="f_ring02L"
                              position={[0, 0.014, 0]}
                              rotation={[0.517, 0, 0.015]}
                            />
                          </group>
                          <group
                            name="thumb01L"
                            position={[0.005, 0.006, 0.013]}
                            rotation={[-2.581, 0.068, -2.777]}
                          >
                            <group
                              name="thumb02L"
                              position={[0, 0.025, 0]}
                              rotation={[0.211, 0, 0.056]}
                            />
                          </group>
                          <group
                            name="f_index01L"
                            position={[0.001, 0.036, 0.013]}
                            rotation={[1.31, 1.013, -1.308]}
                          >
                            <group
                              name="f_index02L"
                              position={[0, 0.012, 0]}
                              rotation={[0.457, 0, -0.027]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="thighR"
              position={[-0.036, 0.013, 0.008]}
              rotation={[2.896, 0.002, 0.029]}
            >
              <group
                name="shinR"
                position={[0, 0.111, 0]}
                rotation={[0.109, -0.016, -0.018]}
              >
                <group
                  name="footR"
                  position={[0, 0.11, 0]}
                  rotation={[-1.221, 0.006, 0.071]}
                >
                  <group
                    name="heel02R"
                    position={[0.007, 0.005, 0.02]}
                    rotation={[2.704, -0.035, 1.625]}
                  />
                  <group
                    name="toeR"
                    position={[0, 0.043, 0]}
                    rotation={[2.704, -0.035, -3.087]}
                  />
                </group>
              </group>
            </group>
            <group
              name="thighL"
              position={[0.036, 0.013, 0.008]}
              rotation={[2.896, -0.002, -0.029]}
            >
              <group
                name="shinL"
                position={[0, 0.111, 0]}
                rotation={[0.109, 0.016, 0.018]}
              >
                <group
                  name="footL"
                  position={[0, 0.11, 0]}
                  rotation={[-1.221, -0.006, -0.071]}
                >
                  <group
                    name="toeL"
                    position={[0, 0.043, 0]}
                    rotation={[2.704, 0.035, 3.087]}
                  />
                  <group
                    name="heel02L"
                    position={[-0.007, 0.005, 0.02]}
                    rotation={[2.704, 0.035, -1.625]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Squid;
useGLTF.preload("./models/red.gltf");
