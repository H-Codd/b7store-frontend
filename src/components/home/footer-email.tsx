import Image from "next/image";

export const FooterEmail = () => {
  return (
    <div className="bg-white py-10 mt-10 ">
      <div className="flex flex-col items-center justify-center md:flex-row gap-10">
        <div className="mx-auto md:mx-0">
            <Image  src={"/ui/mail-send-line.png"} alt="" width={50} height={50}/>
        </div>
        <div className="flex flex-col items-center justify-center md:block">
          <div className="text-2xl font-bold">Fique por dentro das promoções</div>
          <div className="mt-3 text-gray-400">Coloque o seu email e seja o primeiro a saber</div>
        </div>
        <div className="border border-gray-200 w-full md:max-w-80">
            <input className="outline-none p-5" type="text" placeholder="Qual é seu e-mail?" />
        </div>
        <div className=" bg-blue-700 p-5 w-full md:max-w-40 text-white text-center">
            Enviar
        </div>
      </div>
    </div>
  );
};
