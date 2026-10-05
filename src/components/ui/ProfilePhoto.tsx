"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  initials: string;
}

export function ProfilePhoto({ src, alt, initials }: ProfilePhotoProps) {
  const [error, setError] = useState(false);

  return (
    <div className="relative mx-auto h-48 w-48 shrink-0 sm:h-56 sm:w-56">
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600 p-[3px] shadow-xl shadow-teal-500/20"
        aria-hidden
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900">
          {!error ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 192px, 224px"
              onError={() => setError(true)}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-4xl font-bold text-teal-300"
              role="img"
              aria-label={alt}
            >
              {initials}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
