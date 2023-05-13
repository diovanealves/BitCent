import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  function loginGoogle() {
    console.log("Login realizado com sucesso");
  }

  return (
    <div>
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
