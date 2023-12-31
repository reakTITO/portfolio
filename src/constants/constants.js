import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { comfy, drink } from "../assets/images";

export const socials = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vi-reak-286b9a288/",
    icon: BsLinkedin,
  },
  { name: "github", url: "https://github.com/reakTITO", icon: BsGithub },
  {
    name: "instagram",
    url: "https://www.instagram.com/vireaklog/",
    icon: BsInstagram,
  },
];

export const projects = [
  {
    name: "Comfy Shop",
    img: comfy,
    des: "A Functionality E-commerce website with api. Still missing some functions like user, login and signup.",
    techs: ["React", "Tailwind"],
    urls: [
      { url: "https://github.com/reakTITO/Comfy-store", icon: BsGithub },
      { url: "https://comfystore-alpha.vercel.app", icon: CiShare1 },
    ],
  },
];

export const technologies = ["React js", "Tailwind", "Node js", "Material UI"];
