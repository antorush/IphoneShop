import type { FooterSection, TCategory, THeader, TSocial } from "../types/types";
import facebook from "../assets/icons/socials/Facebook.svg";
import twitter from "../assets/icons/socials/Twitter.svg";
import instagram from "../assets/icons/socials/Instagram.svg";
import tiktok from "../assets/icons/socials/Tiktok.svg";
import phones from "../assets/icons/categories/Phones.svg";
import smart from "../assets/icons/categories/SmartWatches.svg";
import camera from "../assets/icons/categories/Cameras.svg";
import headphones  from "../assets/icons/categories/Headphones.svg";
import computers from "../assets/icons/categories/Computers.svg";
import gaming from "../assets/icons/categories/Gaming.svg";


// например, '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export const header: THeader[] = [
  {
    id: 0,
    name: "Home",
  },
  { id: 1, name: "About" },
  { id: 2, name: "Contact Us" },
  { id: 3, name: "Blog" },
];

// Определяем интерфейс для элемента списка
// Сам массив данных
export const footerData: FooterSection[] = [
  {
    title: "Services",
    links: [
      { id: 1, title: "Bonus program", href: "/bonus-program" },
      { id: 2, title: "Gift cards", href: "/gift-cards" },
      { id: 3, title: "Credit and payment", href: "/credit-payment" },
      { id: 4, title: "Service contracts", href: "/service-contracts" },
      { id: 5, title: "Non-cash account", href: "/non-cash-account" },
      { id: 6, title: "Payment", href: "/payment" },
    ],
  },
  {
    title: "Assistance to the buyer",
    links: [
      { id: 7, title: "Find an order", href: "/find-order" },
      { id: 8, title: "Terms of delivery", href: "/delivery-terms" },
      {
        id: 9,
        title: "Exchange and return of goods",
        href: "/exchange-return",
      },
      { id: 10, title: "Guarantee", href: "/guarantee" },
      { id: 11, title: "Frequently asked questions", href: "/faq" },
      { id: 12, title: "Terms of use of the site", href: "/terms-of-use" },
    ],
  },
];

export const Socials: TSocial[] = [
  {
    id: 0,
    icon: twitter,
    name: "twitter",
  },
  {
    id: 1,
    icon: facebook,
    name: "facebook",
  },
  {
    id: 2,
    icon: tiktok,
    name: "tiktok",
  },
  {
    id: 3,
    icon: instagram,
    name: "instagram",
  },
];


export const categoryList:TCategory[]=[{
  id:"category_"+Math.random()*100,
  icon:phones,
  name:'Phones',
  href:'phones'
},{
  id:"category_"+Math.random()*100,
  icon:smart,
  name:'Smart Watches',
  href:'smartwatches'
},{
  id:"category_"+Math.random()*100,
  icon:camera,
  name:'Cameras',
  href:'cameras'
},{
  id:"category_"+Math.random()*100,
  icon:headphones,
  name:'Headphones',
  href:'headphones'
},{
  id:"category_"+Math.random()*100,
  icon:computers,
  name:'Computers',
  href:'computers'
},
{
  id:"category_"+Math.random()*100,
  icon:gaming,
  name:'Gaming',
  href:'/gaming'
},
]