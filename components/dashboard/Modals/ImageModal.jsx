import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

const ImageModal = ({ baseUrl, image, hash, size }) => {
  
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const calculateDimensions = () => {
    const { width, height } = size;
    const newWidth = 500;
    const newHeight = (height * newWidth) / width;
    return { width: newWidth, height: newHeight };
  };

  useEffect(() => {
    setDimensions(calculateDimensions());
    setLoading(true); 
  }, [size, image]);

  return (
    <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
      {loading && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
          <Blurhash
            hash={hash}
            width={dimensions.width}
            height={dimensions.height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <Image
        className={loading ? "invisible" : "visible"}
        onLoadingComplete={() => {
          setLoading(false);
        }}
        loader={({ src }) => src}
        src={baseUrl + image}
        alt="Picture of the author"
        width={dimensions.width}
        height={dimensions.height}
        layout="responsive"
        unoptimized={true} 
      />
    </div>
  );
};

export default ImageModal;