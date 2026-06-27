import Image from "next/image"

type Props = {
    src: string
    alt: string;
    label?: string
}

export const FooterButton = ({src, label, alt}:Props) => {
    return(
        <div className="cursor-pointer border border-gray-200  flex items-center p-5 gap-2 my-5 hover:bg-gray-400">
            <div>
                <Image src={src} alt={alt} width={20} height={20} />
            </div>
            {label &&
                <div>{label}</div>
            }
          </div>
    )
}