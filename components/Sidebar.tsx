import Card from '@/components/Card';
import SidebarLink from './SidebarLink';

const links = [
  { label: 'Home', icon: 'Grid', href: '/home' },
  { label: 'Calendar', icon: 'Calendar', href: '/calendar' },
  { label: 'Profile', icon: 'User', href: '/profile' },
  { label: 'Settings', icon: 'Settings', href: '/settings' },
];

function Sidebar() {
  return (
    <Card className="h-full w-40 flex justify-between items-center flex-wrap">
      {links.map(({ href, icon, label }) => (
        <SidebarLink key={label} href={href} label={label} icon={icon} />
      ))}
    </Card>
  );
}

export default Sidebar;
