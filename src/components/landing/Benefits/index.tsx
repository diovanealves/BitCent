import Area from "../Common/Area";
import Perk from "./Perk";
import Perks1 from "../../../../public/Perks1.jpg";
import Perks2 from "../../../../public/Perks2.jpg";
import Perks3 from "../../../../public/Perks3.jpg";

export default function Perks() {
  return (
    <Area className="bg-black py-16 sm:py-36">
      <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
        <Perk
          image={Perks1}
          title="Gerenciador financeiro completo e simples de usar"
          subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
        />
        <Perk
          image={Perks2}
          title="Organizado para você nunca mais esquecer uma conta"
          subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
          invert
        />
        <Perk
          image={Perks3}
          title="Ideal para planejamento financeiro"
          subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
        />
      </div>
    </Area>
  );
}
