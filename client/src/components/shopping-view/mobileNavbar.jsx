import React, { useState } from 'react';
import { Home, Briefcase, ShoppingBag, Users, BarChart2, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';

const MobileNavBar = () => {
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const [activeItem, setActiveItem] = useState(() => {
    const path = location.pathname;
    if (path.includes('services')) return 'Services';
    if (path.includes('orders')) return 'Orders';
    if (path.includes('leads')) return 'Leads';
    if (path.includes('business')) return 'Business';
    if (path.includes('get-started')) return 'Get Started';
    return 'Home';
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-between items-center px-2 py-3">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          path="./dashboard"
          active={activeItem === 'Home'}
          onClick={() => setActiveItem('Home')}
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label="Services"
          path="./services"
          active={activeItem === 'Services'}
          onClick={() => setActiveItem('Services')}
        />
        {user ? (
          <NavItem
            icon={<ShoppingBag size={20} />}
            label="My Orders"
            path="./orders"
            active={activeItem === 'Orders'}
            onClick={() => setActiveItem('Orders')}
          />
        ) : (
          <NavItem 
          icon={<LogIn size={20} />} 
          label="Get Started" 
          path="/get-started" 
          active={activeItem === 'Get Started'} 
          onClick={(e) => {
            e.preventDefault();
            setActiveItem('Get Started');
            openSignIn();
          }} 
        />
        )}
        <NavItem
          icon={<Users size={20} />}
          label="Leads"
          path="./leads"
          active={activeItem === 'Leads'}
          onClick={() => setActiveItem('Leads')}
        />
        {user && (
          <NavItem
            icon={<BarChart2 size={20} />}
            label="Business"
            path="./business"
            active={activeItem === 'Business'}
            onClick={() => setActiveItem('Business')}
          />
        )}
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, path, active = false, onClick }) => {
  return (
    <a
      href={path}
      className={`flex flex-col items-center justify-center px-2 ${active ? 'text-transparent' : 'text-gray-500'}`}
      onClick={onClick}
    >
      <div
        className={`p-1.5 rounded-full ${active
          ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
          : 'text-gray-500 hover:text-pink-500'}`}
      >
        {icon}
      </div>
      <span
        className={`text-xs mt-1 font-medium ${active
          ? 'bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent'
          : 'text-gray-500'}`}
      >
        {label}
      </span>
      {active && <div className="h-1 w-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-1"></div>}
    </a>
  );
};

export default MobileNavBar;