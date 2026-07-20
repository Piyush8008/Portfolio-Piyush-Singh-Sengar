import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function PixelLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen bg-charcoal flex items-center justify-center"
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gold tracking-[8px] uppercase">
              Loading Portfolio...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PixelLoader;