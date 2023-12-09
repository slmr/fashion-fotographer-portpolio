"use client";

import ClientList from "./component/client-list";
import Hero from "./component/hero";
import { Introduction } from "./component/introduction";
import { RecentProjects } from "./component/recentProjects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ClientList />
      <Introduction />
      <RecentProjects />
      <div className="min-h-screen bg-black"></div>
    </main>
  );
}
