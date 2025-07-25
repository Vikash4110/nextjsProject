'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/">
        <AiFillBug className="text-2xl text-cyan-800" />
      </Link>
      <ul className='flex space-x-6'>
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                link.href === currentPath ? 'text-cyan-800' : 'text-white'
              } font-bold hover:text-cyan-600 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
