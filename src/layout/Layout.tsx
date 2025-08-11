import React from "react";
import Sidebar from "@/layout/Sidebar";
import Navbar from "@/layout/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

// App-wide layout combining the top navbar and the left sidebar.
// Content area is responsive and scrollable.
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-neutral-50 text-neutral-900">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
