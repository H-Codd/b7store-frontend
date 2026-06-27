"use client";

import Image from "next/image";
import { HeaderIcon } from "./header-icon";
import Link from "next/link";
import { useState } from "react";
import { HeaderSearch } from "./header-search";
import { MenuItem } from "@/types/menuitem";

type Props = {
  item: MenuItem[];
};

export function Header({ item }: Props) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white text-center p-4 ">
        <b>FRETE GRÁTIS</b> para todo o Nordeste nas compras acima de R$ 199,99.{" "}
        <b>APROVEITA!</b>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center">
          <div className="w-32">
            <Link href={"/"}>
              <Image
                src={"/ui/logo-black.png"}
                alt="B7Store"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex-1">
            <div className="w-full hidden md:flex justify-between items-center px-6 gap-6">
              <ul className="flex gap-10 font-medium text-gray-500">
                {item.map((item, id) => (
                  <li key={id}>
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon src="/ui/user-line.png" alt="Perfil" />
            </Link>
            <Link href={"/cart"}>
              <HeaderIcon src="/ui/shopping-bag-4-line.png" alt="Carrinho" />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <HeaderIcon
                src="/ui/menu-line.png"
                alt="Menu"
                selected={menuOpened}
                srcSelected="/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>
      {menuOpened && (
        <div className="md:hidden pb-6">
          {item.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-lg text-gray-500">
                  {item.label}
                </div>
                <div>
                  <Image
                    src={"/ui/arrow-up-right.png"}
                    alt="Ir a categoria"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="p-6 pt-0 md:hidden">
        <HeaderSearch />
      </div>
    </header>
  );
}
