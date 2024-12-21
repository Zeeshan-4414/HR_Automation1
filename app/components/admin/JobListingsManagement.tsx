'use client'

import { useState } from 'react'
import { PlusCircle, Edit2, Trash2 } from 'lucide-react'

export default function JobListingsManagement() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Developer', description: 'Develop web applications...', qualifications: 'Bachelor\'s degree in Computer Science', skills: 'React, Node.js, TypeScript' },
    { id: 2, title: 'Marketing Manager', description: 'Lead marketing campaigns...', qualifications: 'MBA in Marketing', skills: 'Digital Marketing, SEO, Content Strategy' }
  ])

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Job Listings Management</h3>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-4 flex items-center">
        <PlusCircle className="mr-2" size={20} /> Add New Job
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Qualifications</th>
              <th className="px-4 py-2 text-left">Skills</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b">
                <td className="px-4 py-2">{job.title}</td>
                <td className="px-4 py-2">{job.description.substring(0, 30)}...</td>
                <td className="px-4 py-2">{job.qualifications}</td>
                <td className="px-4 py-2">{job.skills}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    <Edit2 size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

