import Link from 'next/link'
import { Briefcase, FileText, Clipboard } from 'lucide-react'
import Image from 'next/image'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-indigo-700 text-white shadow-lg transition-all ease-in-out duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/admin" className="flex items-center text-2xl font-bold hover:text-indigo-300 transition-colors duration-200">
            <Image 
              src="/hr automation.png?height=40&width=40" 
              alt="HR Automation Portal Logo" 
              width={40} 
              height={40} 
              className="mr-3" 
            />
            Admin Panel
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/admin/job-listings"
                className="text-lg hover:text-indigo-300 transition-all duration-200 ease-in-out"
              >
                Job Listings
              </Link>
            </li>
            <li>
              <Link
                href="/admin/cv-shortlisting"
                className="text-lg hover:text-indigo-300 transition-all duration-200 ease-in-out"
              >
                CV Shortlisting
              </Link>
            </li>
            <li>
              <Link
                href="/admin/social-media"
                className="text-lg hover:text-indigo-300 transition-all duration-200 ease-in-out"
              >
                Social Media
              </Link>
            </li>
            <li>
              <Link
                href="/admin/question-generator"
                className="text-lg hover:text-indigo-300 transition-all duration-200 ease-in-out"
              >
                Question Generator
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-indigo-600 text-white p-6 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-semibold">HR Admin</div>
            <div className="flex-1 space-y-4 mt-6">
              <Link
                href="/admin"
                className="flex items-center w-full text-lg p-3 rounded-lg hover:bg-indigo-700"
              >
                <Briefcase className="mr-3" size={20} />
                Dashboard
              </Link>
              <Link
                href="/admin"
                className="flex items-center w-full text-lg p-3 rounded-lg hover:bg-indigo-700"
              >
                <FileText className="mr-3" size={20} />
                Notifications
              </Link>
              <Link
                href="/admin"
                className="flex items-center w-full text-lg p-3 rounded-lg hover:bg-indigo-700"
              >
                <Clipboard className="mr-3" size={20} />
                Settings
              </Link>
            </div>
          </div>
          
          {/* Logout button at the bottom */}
          <Link
            href="/"
            className="text-lg p-3 w-full text-center bg-gray-700 rounded-lg hover:bg-indigo-800 mt-6"
          >
            Log Out
          </Link>
        </div>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-auto">
        <p className="font-bold">Copyright &copy; 2024 <strong className="text-blue-700"> HR Automation</strong>. All rights reserved.</p>
      </footer>
    </div>
  )
}

