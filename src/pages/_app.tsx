import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthenticationProvider } from "@/data/context/AuthenticationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}
