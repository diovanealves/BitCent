import Area from "../Common/Area";
import Logo from "../Common/Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <Area className="bg-black">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <Menu />
      </div>
    </Area>
  );
}
