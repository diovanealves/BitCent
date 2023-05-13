import Area from "../Common/Area";
import Logo from "../Common/Logo";
import { SocialNetworkingLinks } from "./SocialNetworkingLinks";

export default function Footer() {
  return (
    <Area className="bg-black py-16">
      <div className="flex flex-col items-center md:items-start">
        <Logo />
        <div className="mt-3 text-zinc-400 text-center md:text-left">
          <h1>Plataforma financeira</h1>
          <p className="flex gap-1.5">
            Que
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              simplifica
            </span>
            sua vida
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <SocialNetworkingLinks />
        <p className="text-zinc-100 mt-7 md:mt-0 text-center">
          <span className="font-bold">
            COD<span className="text-red-500">3</span>R
          </span>
          ® {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </Area>
  );
}
