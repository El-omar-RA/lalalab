"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK_SRC = "/images/placeholder.svg";

type ProductImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function ProductImage({
  src,
  alt,
  className,
  fill,
  sizes,
  width,
  height,
  priority,
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || FALLBACK_SRC);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className={cn("object-cover", className)}
      fill={fill}
      sizes={sizes}
      width={width}
      height={height}
      priority={priority}
      onError={() => setCurrentSrc(FALLBACK_SRC)}
    />
  );
}