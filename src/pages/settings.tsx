import React from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Panda Hub - Settings</title>
      </Head>
      <Layout>
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Coming soon.
        </p>
      </Layout>
    </>
  );
}
