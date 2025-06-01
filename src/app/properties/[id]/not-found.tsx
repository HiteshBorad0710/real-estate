import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-4">Property Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, we couldn't find the property you're looking for.</p>
      <Link 
        href="/properties"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View All Properties
      </Link>
    </div>
  );
} 