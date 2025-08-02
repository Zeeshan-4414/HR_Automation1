import { Briefcase, FileText, Clipboard } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="flex-1 bg-white p-8 overflow-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
            <FileText size={24} />
          </button>
          <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
            <Briefcase size={24} />
          </button>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">Select a section from the navigation bar to manage different aspects of the HR system.</p>

      {/* Cards/Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-200 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800">Add Jobs</h2>
          <p className="mt-3 text-gray-600">Create and post new job openings for candidates to apply.</p>
          <Link href="/admin/job-listings" className="mt-6 text-indigo-600 font-medium hover:text-indigo-700">Go to Section</Link>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-200 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800">Shortlisted CVs</h2>
          <p className="mt-3 text-gray-600">View and manage the CVs of candidates shortlisted for interviews.</p>
          <Link href="/admin/cv-shortlisting" className="mt-6 text-indigo-600 font-medium hover:text-indigo-700">Go to Section</Link>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-200 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800">Candidate Assessment Generator</h2>
          <p className="mt-3 text-gray-600">Generate assessments for candidates based on predefined criteria.</p>
          <Link href="/admin/question-generator" className="mt-6 text-indigo-600 font-medium hover:text-indigo-700">Go to Section</Link>
        </div>
      </div>
    </div>
  )
}
