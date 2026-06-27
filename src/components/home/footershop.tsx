import { MenuItem } from "@/types/menuitem";
import Image from "next/image";
import { FooterButton } from "./footer-button";
import Link from "next/link";

type Props = {
  data: MenuItem[];
};

export const FooterShop = ({ data }: Props) => {
  return (
    <div className="bg-black py-10 text-white">
      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="border-b flex flex-col items-center md:flex-row md:justify-between border-gray-200">
          <div>
            <Image
              src={"/ui/logo-white.png"}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 items-center mt-5 md:mt-0">
            {data.map((item, id) => (
              <Link href={item.href} key={id}>
                <div>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="md:flex justify-between items-start border-b border-gray-300 mt-10">
          <div className="text-center md:text-left space-y-2">
            <div className="font-semibold">Precisa de Ajuda?</div>
            <div className="flex flex-col md:flex-row gap-2.5 justify-center md:justify-start">
              <FooterButton
                alt="Suporte"
                src="/ui/mail-line.png"
                label="suporte@b7web.com.br"
              />
              <FooterButton
                alt="Telefone"
                src="/ui/phone-line.png"
                label="(99) 99 9999-9999"
              />
            </div>
          </div>
          <div className="text-center md:text-left mt-10 md:mt-0 space-y-2">
            <div className="font-semibold">Acompanhe nas redes sociais</div>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-10 md:mb-0">
              <FooterButton alt="Instagram" src="/ui/instagram-line.png" />
              <FooterButton alt="LinkedIn" src="/ui/linkedin-line.png" />
              <FooterButton alt="Facebook" src="/ui/facebook-line.png" />
              <FooterButton alt="Twitter" src="/ui/twitter-x-fill.png" />
            </div>
          </div>
        </div>

        <div className="text-center mt-8 space-y-4">
          <div>Aprendendo e caminhando para o caminho certo!</div>
          <div className="w-16 mx-auto">
            <FooterButton src="/ui/arrow-up-line.png" alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};
