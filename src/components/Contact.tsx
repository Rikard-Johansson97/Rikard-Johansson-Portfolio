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
      className='flex flex-col items-center justify-center bg-background shadow-inner p-4'>
      <h3 className='text-headline text-xl font-bold  pb-4'>Kontakta Mig</h3>
      <p className='text-paragraph text-center max-w-2xl'>
        Om du är intresserad av att anställa mig, vänligen kontakta mig via
        e-post eller telefon. Jag ser fram emot att höra från dig och diskutera
        hur jag kan hjälpa till.
      </p>
      <div className='grid grid-flow-col  justify-evenly w-full  p-4 max-w-2xl'>
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
