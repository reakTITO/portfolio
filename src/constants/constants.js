import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
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
    des: "A web app for buying staffs",
    techs: ["React", "Tailwind"],
  },
];

export const technologies = ["React js", "Tailwind", "Node js", "Material UI"];