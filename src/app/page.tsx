"use client";

import ClientList from "./component/client-list";
import Hero from "./component/hero";
import { Histories } from "./component/history";
import HomeBoard from "./component/home-board";
import { Introduction } from "./component/introduction";
import { RecentProjects } from "./component/recentProjects";
import { Services } from "./component/services";
import { Testimonial } from "./component/testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ClientList />
      <Introduction />
      <RecentProjects />
      <Services />
      <HomeBoard />
      <Histories />
      <Testimonial />
    </main>
  );
}
