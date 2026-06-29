import Image from "next/image";

type InfoCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
      <div className="w-32 border-r border-gray-200 flex justify-center items-center">
        <Image src={icon} alt="" width={40} height={40} />
      </div>
      <div className="flex-1 px-9 text-center">
        <div className="font-bold text-xl p-2">{title}</div>
        <div className="text-gray-500">{description}</div>
      </div>
    </div>
  );
};
