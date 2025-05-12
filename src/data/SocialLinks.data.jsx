import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const SocialData = [
  {
    href: "https://github.com/aunghein-dev",
    title: "GitHub",
    src: "GitHub",
    userName: "@aunghein-dev",
    icon: <FaGithub className="size-4.5" />,
    hocusColor:
      "hover:text-[#333] hover:bg-[#ebebeb] dark:hover:text-[#ebebeb] dark:hover:bg-[#333] focus:text-[#333] focus:bg-[#ebebeb] dark:focus:text-[#ebebeb] dark:focus:bg-[#333]",
  },
  {
    href: "https://www.linkedin.com/in/aung-hein-690787282",
    title: "LinkedIn",
    src: "LinkedIn",
    userName: "/in/aung-hein-690787282",
    icon: <FaLinkedin className="size-4.5" />,
    hocusColor:
      "hover:text-[#0C66C2] hover:bg-[#e7f0f9] dark:hover:text-[#5494d4] dark:hover:bg-[#031f3a] focus:text-[#0C66C2] focus:bg-[#e7f0f9] dark:focus:text-[#5494d4] dark:focus:bg-[#031f3a]",
  },
  {
    href: "https://x.com/_aung_hein_?s=21&t=CmPbQSS1wskQdXtHVgG3Xg",
    title: "𝕏",
    src: "Twitter",
    userName: "@_aung_hein_",
    icon: <BsTwitterX className="size-4.5 text-xl" />,
    hocusColor:
      "hover:text-[#1471a9] hover:bg-[#e8f6fe] dark:hover:text-[#1da1f2] dark:hover:bg-[#093049] focus:text-[#1471a9] focus:bg-[#e8f6fe] dark:focus:text-[#1da1f2] dark:focus:bg-[#093049]",
  },
  {
    href: "https://www.instagram.com/_aunghein_?igsh=MTduNWp2bDVidjJqbA%3D%3D&utm_source=qr",
    title: "Instagram",
    src: "Instagram",
    userName: "@_aunghein_",
    icon: <FaInstagram className="size-4.5" />,
    hocusColor:
      "hover:text-[#ae3077] hover:bg-[#f9ebf3] dark:hover:text-[#d472a9] dark:hover:bg-[#3a1028] focus:text-[#ae3077] focus:bg-[#f9ebf3] dark:focus:text-[#d472a9] dark:focus:bg-[#3a1028]",
  },
  {
    href: "https://www.facebook.com/share/16a5uoosSW/?mibextid=wwXIfr",
    title: "Facebook",
    src: "Facebook",
    userName: "@aunghein",
    icon: <FaFacebook className="size-4.5" />,
    hocusColor:
      "hover:text-[#1185FE] hover:bg-[#e7f3ff] dark:hover:text-[#409DFE] dark:hover:bg-[#031b33] focus:text-[#1185FE] focus:bg-[#e7f3ff] dark:focus:text-[#409DFE] dark:focus:bg-[#031b33]",
  },
  {
    href: "mailto:aunghein.mailer@gmail.com?subject=Hi%20Aung Hein!",
    title: "Send Aung Hein an Email",
    src: "Email",
    userName: "aunghein.mailer@gmail.com",
    icon: <FaEnvelope className="size-4.5" />,
    hocusColor:
      "hover:text-[#356AC4] hover:bg-[#ecf3fe] dark:hover:text-[#5591f5] dark:hover:bg-[#142849] focus:text-[#356AC4] focus:bg-[#ecf3fe] dark:focus:text-[#5591f5] dark:focus:bg-[#142849]",
  },
];

export default SocialData;
