import { useContext } from "react";
import { IconLogout } from "@tabler/icons-react";
import AuthenticationContext from "@/data/context/AuthenticationContext";

export default function UserInformation() {
  const { user, logout } = useContext(AuthenticationContext);

  return (
    <div className="flex items-center gap-3 ">
      <div className="hidden md:flex flex-col select-none text-right">
        <span className="text-sm font-bold text-zinc-200">{user?.name}</span>
        <span className="text-xs text-zinc-200">{user?.email}</span>
      </div>
      <div
        className="flex items-center gap-2 py-2 px-5 bg-blue-500 rounded-lg cursor-pointer"
        onClick={logout}
      >
        <IconLogout size={20} strokeWidth={1} />
        <span>Sair</span>
      </div>
    </div>
  );
}
