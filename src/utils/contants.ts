interface NavLink {
  label: string;
  url: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
  { label: "Cart", url: "/cart" },
  { label: "About Us", url: "/about" },
  { label: "Contact Us", url: "/contact" },
];

export const categories = [
  {
    _id: 1001,
    name: "TV & Audio",
    image: "https://i.ibb.co/kM0FR2h/cat-Tv-Audio.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    _id: 1002,
    name: "TV Box",
    image: "https://i.ibb.co/71hR65V/catTvBox.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    _id: 1003,
    name: "Power Tools",
    image: "https://i.ibb.co/0V0g6Gz/cat-Powertool.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    _id: 1004,
    name: "Headphones",
    image: "https://i.ibb.co/zST2Xdp/cat-Headphone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    _id: 1005,
    name: "Cell Phones",
    image: "https://i.ibb.co/jgk59BL/catPhone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    _id: 1006,
    name: "Smart Watches",
    image: "https://i.ibb.co/B4NKfBZ/cat-Smart-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    _id: 1007,
    name: "Game & Video",
    image: "https://i.ibb.co/4gwLwT2/cat-Gaming.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    _id: 1008,
    name: "Robot Clean",
    image: "https://i.ibb.co/xjpdQrr/cat-Robot-Clean.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    _id: 1009,
    name: "Sport Watches",
    image: "https://i.ibb.co/HdNVLzh/cat-Sport-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    _id: 1010,
    name: "Tablets",
    image: "https://i.ibb.co/qCzTx4F/cat-Tablet.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    _id: 1011,
    name: "Computers & Laptop",
    image: "https://i.ibb.co/74bZ8PH/cat-Computer.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    _id: 1012,
    name: "Cameras & Photos",
    image: "https://i.ibb.co/SVQVWSS/cat-Camera.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];

export const services = [
  {
    title: "Free Shipping",
    tagline: "From all orders over $5",
    image: "/service.png",
  },

  {
    title: "Daily Surprise Offers",
    tagline: "Save upto 25% off",
    image: "/service-02.png",
  },
  {
    title: "Support 24/7",
    tagline: "Shop with an expert",
    image: "/service-03.png",
  },
  {
    title: "Affordable Prices",
    tagline: "Get Factory Default Price",
    image: "/service-04.png",
  },
  {
    title: "Secure Payments",
    tagline: "100% Protected Payment",
    image: "/service-05.png",
  },
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