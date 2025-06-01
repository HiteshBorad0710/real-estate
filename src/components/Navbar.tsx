import Link from 'next/link';
import { HomeIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <HomeIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">RealEstate</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/properties" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
              <BuildingOfficeIcon className="h-5 w-5 mr-1" />
              <span>Properties</span>
            </Link>
            <Link href="/about" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
              <UserIcon className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 