import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
};

// This would typically come from your API or database
async function getProperties(): Promise<Property[]> {
  // Placeholder data - replace with actual API call
  const mockProperties: Property[] = [
    {
      id: '1',
      title: 'Luxury Villa with Ocean View',
      price: 1200000,
      location: 'Miami Beach, FL',
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3500,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: '2',
      title: 'Modern Downtown Apartment',
      price: 750000,
      location: 'Downtown Miami, FL',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: '3',
      title: 'Cozy Family Home',
      price: 550000,
      location: 'Coral Gables, FL',
      bedrooms: 3,
      bathrooms: 2,
      area: 2000,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: '4',
      title: 'Waterfront Luxury Condo',
      price: 980000,
      location: 'Brickell, Miami, FL',
      bedrooms: 3,
      bathrooms: 2.5,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  return mockProperties;
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="text-white text-xl font-semibold">${property.price.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-600 mb-4">{property.location}</p>
          
          <div className="flex justify-between text-gray-500">
            <div className="flex items-center gap-1">
              <FaBed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRuler className="w-4 h-4" />
              <span>{property.area} ft²</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Featured Properties</h1>
        <p className="text-gray-600">Discover your perfect home from our selection of premium properties</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
} 