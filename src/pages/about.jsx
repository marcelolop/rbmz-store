import HeroBanner from "../components/about-us/HeroBanner";
import Members from "../components/about-us/Members";
import Offices from "../components/about-us/Offices";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div>
        <HeroBanner />
        <Members />
        <Offices />
      </div>
    </motion.div>
  );
}

export default About;
