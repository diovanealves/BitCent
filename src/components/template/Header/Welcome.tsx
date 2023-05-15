import { useContext } from "react";
import AuthenticationContext from "@/data/context/AuthenticationContext";

export default function Welcome() {
  const { user } = useContext(AuthenticationContext);
  return (
    <div className="text-3xl font-black">
      Olá <span>{user?.name?.split(" ")[0]}</span>
    </div>
  );
}
