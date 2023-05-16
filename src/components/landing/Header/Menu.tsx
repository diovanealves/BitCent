import { IconBrandGoogle } from "@tabler/icons-react";
import { useContext } from "react";
import MenuItem from "./MenuItem";
import AuthenticationContext from "@/data/context/AuthenticationContext";

export default function Menu() {
  const { loginGoogle } = useContext(AuthenticationContext);

  return (
    <div className="flex gap-2">
      <MenuItem url="#Featured" className="hidden sm:flex">
        Início
      </MenuItem>
      <MenuItem url="#Benefits" className="hidden sm:flex">
        Vantagens
      </MenuItem>
      <MenuItem url="#Testimonial" className="hidden sm:flex">
        Depoimentos
      </MenuItem>
      <MenuItem
        className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-80
      "
        onClick={loginGoogle}
      >
        <IconBrandGoogle size={15} />
        <span>Login</span>
      </MenuItem>
    </div>
  );
}
