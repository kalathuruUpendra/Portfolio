import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.img
        src="./favicon.ico" // Replace with your image source
        alt="Animated Logo"
        className="h-16 w-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </AnimatePresence>
  );
}
