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
    content: "+46 70 847 66 66",
  },
];

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center p-4 bg-background'>
      <h3 className='text-headline text-xl font-bold'>Contact Me</h3>
      <p className='text-paragraph text-center'>
        If you are interested in hiring me, please contact me via email or
        phone. I look forward to hearing from you and discussing how I can help.
      </p>
      <div className='flex justify-evenly w-full max-w-2xl p-4 flex-col sm:flex-row'>
        {contacts.map((item, i) => (
          <div key={i} className='flex flex-col text-center p-2'>
            <div>
              <IconButton className='text-greenText'>{item.icon}</IconButton>
            </div>
            <p className='text-lg text-headline font-medium'>{item.name}</p>
            <p className='text-xs text-paragraph'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
