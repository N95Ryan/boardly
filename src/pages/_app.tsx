import type { AppProps } from "next/app";
import "@/styles/globals.css";

// The custom App component loads global styles once and renders each page.
// Keep this component minimal to avoid unnecessary rerenders.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
