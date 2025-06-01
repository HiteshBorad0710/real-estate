import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaBed, FaBath, FaRuler, FaCar, FaSwimmingPool } from 'react-icons/fa';
import { MdOutlineChair } from 'react-icons/md';

type Amenity = {
  name: string;
  available: boolean;
};

type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  yearBuilt: number;
  propertyType: string;
  parkingSpaces: number;
  amenities: Amenity[];
  furnished: boolean;
};

// This would typically come from your API or database
async function getProperty(id: string): Promise<Property | null> {
  // Placeholder data - replace with actual API call
  const mockProperty: Property = {
    id,
    title: 'Luxury Villa with Ocean View',
    price: 1200000,
    location: '123 Ocean Drive, Miami Beach, FL',
    description: 'Beautiful luxury villa with stunning ocean views. This property features modern architecture, high-end finishes, and an infinity pool. Perfect for those seeking a luxurious lifestyle by the beach. The property includes a gourmet kitchen, spacious master suite, and multiple entertainment areas.',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3500,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop'
    ],
    yearBuilt: 2020,
    propertyType: 'Villa',
    parkingSpaces: 2,
    furnished: true,
    amenities: [
      { name: 'Swimming Pool', available: true },
      { name: 'Garden', available: true },
      { name: 'Security System', available: true },
      { name: 'Central AC', available: true },
      { name: 'Home Theater', available: false },
      { name: 'Gym', available: true }
    ]
  };
  
  return mockProperty;
}

function PropertyFeature({ icon: Icon, label, value }: { icon: any, label: string, value: string | number }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
      <Icon className="w-6 h-6 mx-auto text-blue-600 mb-2" />
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

function AmenityBadge({ name, available }: Amenity) {
  return (
    <div className={`px-4 py-2 rounded-full text-sm ${
      available 
        ? 'bg-green-100 text-green-800' 
        : 'bg-gray-100 text-gray-800 line-through'
    }`}>
      {name}
    </div>
  );
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-2 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        {property.images.slice(1).map((image, index) => (
          <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`${property.title} - Image ${index + 2}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ${property.price.toLocaleString()}
            </p>
            <p className="text-gray-600 text-lg">{property.location}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <PropertyFeature icon={FaBed} label="Bedrooms" value={property.bedrooms} />
            <PropertyFeature icon={FaBath} label="Bathrooms" value={property.bathrooms} />
            <PropertyFeature icon={FaRuler} label="Square Feet" value={property.area} />
            <PropertyFeature icon={FaCar} label="Parking" value={property.parkingSpaces} />
            <PropertyFeature icon={MdOutlineChair} label="Furnished" value={property.furnished ? 'Yes' : 'No'} />
            <PropertyFeature icon={FaSwimmingPool} label="Year Built" value={property.yearBuilt} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity, index) => (
                <AmenityBadge key={index} {...amenity} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
            <h3 className="text-xl font-semibold mb-6">Interested in this property?</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="I'm interested in this property..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Agent
              </button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 