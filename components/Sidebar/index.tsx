/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavHome from '@/assets/icons/icon-volleyball-nav-home.png';
import NavEvent from '@/assets/icons/icon-volleyball-nav-event.png';
import NavCalendar from '@/assets/icons/icon-volleyball-nav-calendar.png';
import NavUser from '@/assets/icons/icon-volleyball-nav-user.png';

const Sidebar: React.FC = () => {
  return (
    <nav className="font-arial fixed left-0 top-0 flex h-screen w-[210px] flex-col gap-y-4 bg-yellow px-8 py-4 text-navy md:w-[300px] md:gap-y-6 md:py-8 lg:gap-y-8 lg:px-12">
      <h2 className="default-h4 font-black text-red">排球Queue</h2>
      <Link href="/">
        <a>
          <div className="default-h5 flex items-center font-extrabold">
            <Image src={NavHome} width={28} height={28} layout="fixed" />
            <span className="ml-2">Home</span>
          </div>
        </a>
      </Link>
      <Link href="/events">
        <a className="default-h5 flex items-center font-extrabold">
          <Image src={NavEvent} width={28} height={28} layout="fixed" />
          <span className="ml-2 inline-block">Events</span>
        </a>
      </Link>
      <Link href="/calender">
        <a className="default-h5 flex items-center font-extrabold">
          <Image src={NavCalendar} width={28} height={28} layout="fixed" />
          <span className="ml-2 inline-block">Calendar</span>
        </a>
      </Link>
      <Link href="/account">
        <a className="default-h5 flex items-center font-extrabold">
          <Image src={NavUser} width={28} height={28} layout="fixed" />
          <span className="ml-2 inline-block">Account</span>
        </a>
      </Link>
    </nav>
  );
};

export default Sidebar;
