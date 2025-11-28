export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      {/* Animated Spinner */}
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg animate-pulse" />
        
        {/* Main Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
        </div>
        
        {/* Inner Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Loading Amazing Content
        </div>
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[progress_2s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}