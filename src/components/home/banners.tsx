'use client'

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  list: Banner[];
};

export const Banners = ({ list }: Props) => {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const bannerTimer = useRef<NodeJS.Timeout | null>(null);
    const nextImage = () => {
        setCurrentImage(currentImage => {
            if(currentImage + 1 >= list.length) {
                return 0
            } else {
                return currentImage + 1
            }
        })
    }

    const handleBannerClick = (index:number) => {
        setCurrentImage(index);
        if (bannerTimer.current) clearInterval(bannerTimer.current);
        bannerTimer.current = setInterval(nextImage, 3000);
    }

    useEffect(() => {
        bannerTimer.current = setInterval(nextImage, 3000);
        return () => {
            if (bannerTimer.current) clearInterval(bannerTimer.current);
        }
    }, [])

  return (
    <div>
      <div className="relative aspect-3/1">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            className="absolute inset-0 transition-all"
            style={{ opacity: currentImage === index ? 1 : 0 }}
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-sm"
              unoptimized
            />
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        {list.map((_, index) => (
          <div
            key={index}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            onClick={() => handleBannerClick(index)}
            style={{ opacity: currentImage === index ? 1 : 0.35 }}
            
          />
        ))}
      </div>
    </div>
  );
};
