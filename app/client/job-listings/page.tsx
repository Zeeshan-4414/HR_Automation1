'use client'

import { useState, useEffect } from 'react'
import { Briefcase } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const getJobsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const jobs = localStorage.getItem('jobs')
    return jobs ? JSON.parse(jobs) : [
      { id: '1', title: 'Software Developer', description: 'Develop web applications...', qualifications: 'Bachelor\'s degree in Computer Science', skills: 'React, Node.js, TypeScript', applicants: 5 },
      { id: '2', title: 'Marketing Manager', description: 'Lead marketing campaigns...', qualifications: 'MBA in Marketing', skills: 'Digital Marketing, SEO, Content Strategy', applicants: 3 },
      { id: '3', title: 'Data Analyst', description: 'Analyze complex datasets...', qualifications: 'Bachelor\'s degree in Statistics or related field', skills: 'Python, SQL, Data Visualization', applicants: 2 }
    ]
  }
  return []
}

export default function JobListings() {
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs')
    if (!storedJobs) {
      const initialJobs = [
        { id: '1', title: 'Software Developer', description: 'Develop web applications...', qualifications: 'Bachelor\'s degree in Computer Science', skills: 'React, Node.js, TypeScript', applicants: 5 },
        { id: '2', title: 'Marketing Manager', description: 'Lead marketing campaigns...', qualifications: 'MBA in Marketing', skills: 'Digital Marketing, SEO, Content Strategy', applicants: 3 },
        { id: '3', title: 'Data Analyst', description: 'Analyze complex datasets...', qualifications: 'Bachelor\'s degree in Statistics or related field', skills: 'Python, SQL, Data Visualization', applicants: 2 }
      ]
      localStorage.setItem('jobs', JSON.stringify(initialJobs))
      setJobs(initialJobs)
    }
  }, [])

  useEffect(() => {
    setJobs(getJobsFromStorage())
  }, [])

  const router = useRouter()

  const handleApply = (jobId: string) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    
    if (isLoggedIn) {
      router.push(`/client/apply?jobId=${jobId}`)
    } else {
      router.push(`/login?redirect=/client/apply&jobId=${jobId}`)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      {jobs.length === 0 ? (
        <p>No job listings available at the moment.</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <Briefcase className="mr-2 text-green-500" size={24} />
                {job.title}
              </h2>
              <p className="mb-4">{job.description}</p>
              <p className="mb-2"><strong>Qualifications:</strong> {job.qualifications}</p>
              <p className="mb-4"><strong>Skills:</strong> {job.skills}</p>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                onClick={() => handleApply(job.id)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link href="/client" className="text-blue-600 hover:underline">
          Back to Client Portal
        </Link>
      </div>
    </div>
  )
}

