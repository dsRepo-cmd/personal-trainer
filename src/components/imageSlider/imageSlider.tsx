import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import { cn } from "../../lib/cn";

type ImagesSliderProps = {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
};

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: ImagesSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const loadImages = useCallback(async () => {
    try {
      const loadPromises = images.map(
        (image) =>
          new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
          })
      );
      const loaded = await Promise.all(loadPromises);
      setLoadedImages(loaded);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load images", error);
    }
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: number | undefined;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [handleNext, handlePrevious, autoplay]);

  const slideVariants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: { duration: 1 },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: { duration: 1 },
    },
  };

  if (loading) return null;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center bg-[#0c0c0c]",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {loadedImages.length > 0 && children}
      {loadedImages.length > 0 && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/30 z-40", overlayClassName)}
        />
      )}
      {loadedImages.length > 0 && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
