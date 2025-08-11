import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

// Load Inter font to match Figma typography. Applied app-wide.
const inter = Inter({ subsets: ["latin"], display: "swap" });

// The custom App component loads global styles once and renders each page.
// Keep this component minimal to avoid unnecessary rerenders.
export default function App({ Component, pageProps }: AppProps) {
  // Default document head for all pages. Individual pages can override.
  return (
    <>
      <Head>
        <title>Panda Hub - Dashboard</title>
        <meta name="description" content="PandaHub - Dashboard" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
