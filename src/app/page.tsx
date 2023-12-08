import Image from "next/image";
import ScrollIndicator from "./component/scrollIndicator";
import ClientList from "./component/client-list";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative h-screen w-full">
        <div className="absolute left-1/2 md:left-20 top-[15%] md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 md:-translate-x-0 z-40">
          <div className="text-6xl text-center md:text-left md:text-9xl font-bold">
            <span className="text-white">Revaldi</span>
            <br />
            <span className="text-red-500">Basak</span>
          </div>
        </div>
        <Image
          src={"/main-profile.webp"}
          fill
          alt="main profile image"
          objectFit="cover"
          className="hidden md:block"
        />
        <div className="absolute h-3/4 w-full bottom-0">
          <Image
            src={"/main-profile-mobile.webp"}
            fill
            alt="main profile image"
            objectFit="cover"
            className="block md:hidden"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-40">
          <ScrollIndicator />
        </div>
      </div>
      <ClientList />
    </main>
  );
}
