'use client'

import { useState, useEffect } from 'react'
import { FileText, Eye } from 'lucide-react'

const getJobsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const jobs = localStorage.getItem('jobs')
    return jobs ? JSON.parse(jobs) : []
  }
  return []
}

const initialCandidates = [
  { id: 1, name: 'Zeeshan Ahmad', score: 85, jobId: '1' },
  { id: 2, name: 'Atta ur Rehman', score: 92, jobId: '2' },
  { id: 3, name: 'Khawaja Shaheer', score: 78, jobId: '3' }
]

export default function CVShortlisting() {
  const [jobs, setJobs] = useState([])
  const [candidates, setCandidates] = useState(initialCandidates)

  useEffect(() => {
    setJobs(getJobsFromStorage())
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CV Shortlisting Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Candidate</th>
              <th className="px-4 py-2 text-left">Job Role</th>
              <th className="px-4 py-2 text-left">Skills</th>
              <th className="px-4 py-2 text-left">Relevance Score</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => {
              const job = jobs.find(j => j.id === candidate.jobId) || { title: 'N/A', skills: 'N/A' }
              return (
                <tr key={candidate.id} className="border-b">
                  <td className="px-4 py-2 flex items-center">
                    <FileText className="mr-2 text-blue-500" size={20} />
                    {candidate.name}
                  </td>
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.skills}</td>
                  <td className="px-4 py-2">{candidate.score}%</td>
                  <td className="px-4 py-2">
                    <button 
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors flex items-center"
                      onClick={() => alert(`Viewing details for ${candidate.name}`)}
                    >
                      <Eye className="mr-1" size={16} /> View Details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
