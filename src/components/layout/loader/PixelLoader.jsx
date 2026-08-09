import { AnimatePresence, motion } from "framer-motion";
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
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[var(--color-charcoal)]
            text-[var(--color-background)]
          "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex flex-col items-center">
            {/* Loading Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.35em]
                text-[var(--color-gold)]
              "
            >
              Loading Portfolio
            </motion.p>

            {/* Pixel Loading Indicator */}
            <div
              className="mt-6 flex items-end gap-1"
              aria-label="Loading"
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.span
                  key={index}
                  className="
                    block
                    h-2
                    w-2
                    bg-[var(--color-gold)]
                  "
                  initial={{ opacity: 0.25 }}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scaleY: [1, 1.8, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PixelLoader;