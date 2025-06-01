import Navbar from '@/components/Navbar';
import BannerSlider from '@/components/BannerSlider';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Villa-2',
      price: '$850,000',
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3',
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      price: '$450,000',
      location: 'Manhattan, NY',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      beds: 2,
      baths: 2,
      sqft: 1200,
    },
    {
      id: 3,
      title: 'Seaside Cottage',
      price: '$650,000',
      location: 'Malibu, CA',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
      beds: 3,
      baths: 2,
      sqft: 1800,
    },
  ];

  return (
    <div>
      <Navbar />
      <BannerSlider />
      
      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <Link href={`/properties/${property.id}`} key={property.id} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{property.price}</p>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between text-gray-600">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
