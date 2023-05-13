import { createContext, useEffect, useState } from "react";

import User from "@/logic/core/user/User";
import AuthenticationFirebase from "@/logic/firebase/auth/auth";
import services from "@/logic/core";

interface AuthenticationProps {
  loading: boolean;
  user: User | null;
  loginGoogle: () => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthenticationContext = createContext<AuthenticationProps>({
  loading: true,
  user: null,
  loginGoogle: async () => null,
  logout: async () => {},
});

export default AuthenticationContext;

export function AuthenticationProvider(props: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cancelTrack = services.authentication.track(function (user) {
      setUser(user);
      setLoading(false);
    });

    return () => cancelTrack();
  }, []);

  async function loginGoogle(): Promise<User | null> {
    const user = await services.authentication.loginGoogle();
    setUser(user);
    return user;
  }

  async function logout(): Promise<void> {
    await services.authentication.logout();
    setUser(null);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        user,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}
