export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Image Gallery Skeleton */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-2 relative h-[400px] rounded-lg bg-gray-200 animate-pulse" />
        <div className="relative h-[200px] rounded-lg bg-gray-200 animate-pulse" />
        <div className="relative h-[200px] rounded-lg bg-gray-200 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Skeleton */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title and Price */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="h-6 w-6 bg-gray-200 rounded-full mx-auto mb-2 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded w-16 mx-auto animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-20 mx-auto mt-2 animate-pulse" />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse" />
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="h-7 bg-gray-200 rounded w-3/4 mb-6 animate-pulse" />
            
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
              ))}
              
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 rounded w-1/4 animate-pulse" />
                <div className="h-24 bg-gray-200 rounded w-full animate-pulse" />
              </div>

              <div className="h-12 bg-gray-200 rounded w-full animate-pulse" />
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 