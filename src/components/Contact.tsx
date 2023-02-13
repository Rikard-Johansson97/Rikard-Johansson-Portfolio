import React, { FC } from "react";
import RoomIcon from "@mui/icons-material/Room";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton } from "@mui/material";

interface ContactProps {}

const contacts = [
  {
    icon: <RoomIcon />,
    name: "ADRESS",
    content: "Halland, Varberg",
  },
  {
    icon: <AlternateEmailIcon />,
    name: "EMAIL",
    content: "rikard.johansson.1997@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    name: "PHONE",
    content: "+46708476666",
  },
];

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h3 className='text-headline text-xl'>Contact Me</h3>
      <p className='text-paragraph text-center'>
        If you are interested in hiring me, please contact me via email or
        phone. I look forward to hearing from you and discussing how I can help.
      </p>
      <div className='flex justify-between w-full max-w-xl p-4'>
        {contacts.map((item, i) => (
          <div key={i} className='flex flex-col text-center'>
            <IconButton className='text-greenText'>{item.icon}</IconButton>
            <p className='text-lg text-headline'>{item.name}</p>
            <p className='text-xs text-paragraph text-headline'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
