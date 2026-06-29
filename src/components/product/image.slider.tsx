'use client'

import Image from "next/image"
import { useState } from "react"

type Props = {
    images: string[]
}
export const ImageSlider = ({images}: Props) => {
    const [selextedImageIndex, setSelectedImageIndex] = useState<number>(0)
    const handleThumbnailClick = (index:number) => {
        setSelectedImageIndex(index)
    }
    return(
        <div className="max-w-sm mx-auto md:mx-0">
            <div className="border border-gray-300 bg-white p-14">
                <Image  src={images[selextedImageIndex]} unoptimized alt="" width={300} height={300} className="max-w-full"/>
            </div>
            <div className=" mt-8 grid grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div key={index} onClick={()=> handleThumbnailClick(index)} className={`bg-white p-2 cursor-pointer border ${index === selextedImageIndex ? 'border-blue-500': 'border-gray-300'}`}>
                        <Image  src={image} alt="" unoptimized width={120} height={120}/>
                    </div>
                ))}
            </div>
        </div>
    )
}