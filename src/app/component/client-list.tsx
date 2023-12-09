"use client";

const items = [
  {
    name: "Canon",
    url: "/partner/canon-logo.svg",
  },
  {
    name: "Fujifilm",
    url: "/partner/fujifilm-logo.svg",
  },
  {
    name: "Nikon",
    url: "/partner/nikon-logo.svg",
  },
  {
    name: "Panasonic",
    url: "/partner/panasonic-logo.svg",
  },
  {
    name: "Sony",
    url: "/partner/sony-logo.svg",
  },
  {
    name: "Sigma",
    url: "/partner/sigma-logo.svg",
  },
  {
    name: "Tamron",
    url: "/partner/tamron-logo.svg",
  },
  {
    name: "Godox",
    url: "/partner/godox-logo.svg",
  },
  {
    name: "Pentax",
    url: "/partner/pentax-logo.svg",
  },
];
const ClientItem = ({ url, name }: { url: string; name: string }) => {
  return (
    <div className="flex-shrink-0 aspect-video h-12">
      <img src={url} alt={name} className="object-contain w-full h-full" />
    </div>
  );
};
const ClientList = () => {
  return (
    <div className="flex overflow-hidden border-t-2 border-b-2  py-2 gap-6 select-none z-50 relative bg-black">
      <div className="flex-shrink-0 flex min-w-full justify-around gap-16 items-center running ">
        {items.map((item) => (
          <ClientItem key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
      <div className="flex-shrink-0 flex min-w-full justify-around gap-16 items-center running ">
        {items.map((item) => (
          <ClientItem key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
