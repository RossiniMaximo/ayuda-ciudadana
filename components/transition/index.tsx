import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface transitionProps {
  children: any;
}

const variants = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

export function Transition({ children }: transitionProps) {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ x: 0, opacity: 0, transition: { duration: 0.5 } }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
