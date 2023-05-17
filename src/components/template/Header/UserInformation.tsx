import { useContext } from "react";
import { Menu, Avatar } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout } from "@tabler/icons-react";
import AuthenticationContext from "@/data/context/AuthenticationContext";
import Link from "next/link";

export default function UserInformation() {
  const { user, logout } = useContext(AuthenticationContext);

  return (
    <Menu>
      <Menu.Target>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="hidden md:flex flex-col text-right select-none">
            <span className="text-sm font-bold text-zinc-200">
              {user?.name}
            </span>
            <span className="text-xs text-zinc-400">{user?.email}</span>
          </div>
          <Avatar
            size={50}
            radius="xl"
            src={
              user?.avatar ??
              "https://source.unsplash.com/random/100x100/?abstract"
            }
          />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<IconLogout size={20} strokeWidth={1} />}
          onClick={logout}
        >
          Sair
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
