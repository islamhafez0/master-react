import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  slideAnimation,
  headTextAnimation,
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
} from "../config/motion";
import { Button } from "../components";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="/threejs.png"
              alt="threejs"
              className="w-8 h-8 object-cover"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Let's <br className="xl:block hidden" />
                Do It
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="font-normal text-base text-gray-700 max-w-md">
                Create your uniqe and exclusive t-shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination</strong> and define your own
                style
              </p>
            </motion.div>
            <Button
              type="filled"
              title="Customize it"
              styles="w-fit px-4 py-2.5 font-bold text-sm"
              handleClick={() => (state.intro = false)}
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
