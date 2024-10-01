interface NavLink {
  label: string;
  url: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Store", url: "/products" },
  { label: "Cart", url: "/cart" },
  { label: "Orders", url: "/orders" },
  { label: "About", url: "/about" }
];

export const categories = [
  {
    id: 1001,
    name: "TV & Audio",
    image: "https://i.ibb.co/kM0FR2h/cat-Tv-Audio.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    id: 1002,
    name: "TV Box",
    image: "https://i.ibb.co/71hR65V/catTvBox.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    id: 1003,
    name: "Power Tools",
    image: "https://i.ibb.co/0V0g6Gz/cat-Powertool.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    id: 1004,
    name: "Headphones",
    image: "https://i.ibb.co/zST2Xdp/cat-Headphone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    id: 1005,
    name: "Cell Phones",
    image: "https://i.ibb.co/jgk59BL/catPhone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    id: 1006,
    name: "Smart Watches",
    image: "https://i.ibb.co/B4NKfBZ/cat-Smart-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    id: 1007,
    name: "Game & Video",
    image: "https://i.ibb.co/4gwLwT2/cat-Gaming.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    id: 1008,
    name: "Robot Clean",
    image: "https://i.ibb.co/xjpdQrr/cat-Robot-Clean.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    id: 1009,
    name: "Sport Watches",
    image: "https://i.ibb.co/HdNVLzh/cat-Sport-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    id: 1010,
    name: "Tablets",
    image: "https://i.ibb.co/qCzTx4F/cat-Tablet.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    id: 1011,
    name: "Computers & Laptop",
    image: "https://i.ibb.co/74bZ8PH/cat-Computer.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    id: 1012,
    name: "Cameras & Photos",
    image: "https://i.ibb.co/SVQVWSS/cat-Camera.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];

export const services = [
  {
    title: "Free Returns",
    description: "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
    image: "/return-light.svg",
  },

  {
    title: "Same day delivery",
    description: "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
    image: "/calender-icon.svg",
  },
  {
    title: "All year discount",
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
    image: "/gift-card.svg",
  },
  {
    title: "For the planet",
    description: "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
    image: "/planet-icon.svg",
  }
];

export const trusteData = [
  {
    title: "trusted 1",
    image: "/brand-01.png"
  },
  {
    title: "trusted 2",
    image: "/brand-02.png"
  },
  {
    title: "trusted 3",
    image: "/brand-03.png"
  },
  {
    title: "trusted 4",
    image: "/brand-04.png"
  },
  {
    title: "trusted 5",
    image: "/brand-05.png"
  }
]