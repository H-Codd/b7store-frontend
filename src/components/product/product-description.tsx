'use client'

import Image from "next/image"
import { useState } from "react"

type Props = {
    text: string
}

export const ProductDescription = ({text}: Props) => {
    const [ opened, setOpened] = useState<boolean>(false)
    return(
        <div className=" bg-white border border-gray-200 px-7 my-20">
            <div className={`flex justify-between py-7 items-center ${opened ? "border-b": "border-0"}border-gray-200`}>
                <div className="text-2xl">Informações do Produto</div>
                <div onClick={()=> setOpened(!opened)} className={`size-14 border transition-all border-gray-200 flex justify-center items-center rounded-sm ${opened ? 'rotate-0' : 'rotate-180'}`}>
                    <Image src={'/ui/arrow-left-s-line.png'} alt="" width={24} height={24} />
                </div>
            </div>
            {opened &&
            <div className="text-gray-500 my-12">
                {text}
            </div>
            }
        </div>
    )
}