import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const groupRef = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobileView = window.innerWidth <= 600;

    // set the initial posion of the modal
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2];
      if (isMobileView) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobileView) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    //set modal cam position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the modal rotation smoothly
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={groupRef}>{children}</group>;
};

export default CameraRig;
