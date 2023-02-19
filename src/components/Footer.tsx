import Link from "next/link";
import React, { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

interface FooterProps {}

const navigation = [
  {
    icon: <GitHubIcon style={{ color: "#2cb67d" }} />,
    href: "https://github.com/Rikard-Johansson97",
  },
  {
    icon: <LinkedInIcon style={{ color: "#2cb67d" }} />,
    href: "https://www.linkedin.com/in/rikard-johansson-571844249/",
  },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='flex bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-t-2 border-greenText justify-center p-2'>
      <nav>
        {navigation.map((link, i) => (
          <IconButton
            key={i}
            className='text-greenText transition-colors duration-300 hover:text-highlight'>
            <Link href={link.href} target='_blank'></Link>
            {link.icon}
          </IconButton>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
