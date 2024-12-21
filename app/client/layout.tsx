import Link from 'next/link'
import Image from 'next/image'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/client" className="flex items-center text-3xl font-bold hover:text-green-200 transition-colors duration-200">
            <Image 
              src="/hr automation.png?height=40&width=40" 
              alt="HR Automation Portal Logo" 
              width={40} 
              height={40} 
              className="mr-3" 
            />
            Client Portal
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/client/job-listings"
                className="text-lg hover:text-green-200 transition-all duration-200 ease-in-out"
              >
                Job Listings
              </Link>
            </li>
            <li>
              <Link
                href="/client/apply"
                className="text-lg hover:text-green-200 transition-all duration-200 ease-in-out"
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                href="/client/company-info"
                className="text-lg hover:text-green-200 transition-all duration-200 ease-in-out"
              >
                Company Info
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-lg hover:text-green-200 transition-all duration-200 ease-in-out"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8 bg-white rounded-lg shadow-xl mt-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-auto">
        <p className="font-bold">Copyright &copy; 2024 <strong className="text-blue-700"> HR Automation</strong>. All rights reserved.</p>
      </footer>
    </div>
  )
}

