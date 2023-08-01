'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Grid, Icon, Settings, User } from 'react-feather';

const icons: { [key: string]: Icon } = { Calendar, Grid, Settings, User };

interface Props {
  label: string;
  icon: string;
  href: string;
}

function SidebarLink({ href, icon, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false;
  const SidebarIcon = icons[icon];

  return (
    <Link href={href} className="w-full flex justify-center items-center cursor-pointer">
      <SidebarIcon
        className={clsx(
          'stroke-gray-400 hover:stroke-gray-600 transition duration-200 ease-out',
          isActive && 'store-violet-600 hover:stroke-violet-600'
        )}
        size={40}
      />
      {label}
    </Link>
  );
}

export default SidebarLink;
