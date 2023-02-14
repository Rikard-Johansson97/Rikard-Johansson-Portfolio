/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavbarProps {}

interface NavigationType {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationType[] = [
  { name: "Home", href: "/", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarProps> = () => {
  const [currentItem, setCurrentItem] = useState(navigation[0]);
  const [open, setOpen] = useState(false);

  const handleItemClick = (item: NavigationType) => {
    setCurrentItem({ ...currentItem, current: false });
    setCurrentItem(item);
  };

  return (
    <Disclosure as='nav' className={`absolute w-full`}>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-5xl px-4'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-paragraph hover:bg-background hover:text-headline focus:outline-none focus:ring-2 focus:ring-inset focus:ring-headline'>
                  <span className='sr-only'>
                    {open ? "Close main menu" : "Open main menu"}
                  </span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='hidden h-8 w-auto sm:block rounded-shape shadow-sm'
                    src='https://i.postimg.cc/J4brMKmD/Avatar-Maker.png'
                    alt='Your Company'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        scroll={false}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          item === currentItem
                            ? "underline underline-offset-2 text-headline"
                            : "text-paragraph hover:text-highlight"
                        }`}
                        onClick={() => handleItemClick(item)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 bg-background border-b-2 border-greenText'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-background text-headline"
                      : "text-highlight hover:text-headline",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
