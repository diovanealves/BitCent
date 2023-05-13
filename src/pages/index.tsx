import { useContext } from "react";
import Landing from "@/components/landing";
import Finance from "@/components/finance";
import AuthenticationContext from "@/data/context/AuthenticationContext";
import Loading from "@/components/template/Loading";

export default function Home() {
  const { user, loading } = useContext(AuthenticationContext);

  if (loading) return <Loading />;
  return user ? <Finance /> : <Landing />;
}
