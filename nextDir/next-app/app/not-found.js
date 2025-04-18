import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  )
} 