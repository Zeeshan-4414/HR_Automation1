'use client'

import { useState, useEffect, Suspense } from 'react'
import { Send, Upload } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'

const getJobsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const jobs = localStorage.getItem('jobs')
    return jobs ? JSON.parse(jobs) : []
  }
  return []
}

const saveJobsToStorage = (jobs) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jobs', JSON.stringify(jobs))
  }
}

function ApplicationFormContent() {
  const [jobs, setJobs] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    jobId: ''
  })

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const storedJobs = getJobsFromStorage()
    setJobs(storedJobs)

    const jobId = searchParams.get('jobId')
    if (jobId) {
      setFormData(prev => ({ ...prev, jobId }))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    // Increment application count
    const updatedJobs = jobs.map(job => 
      job.id === formData.jobId 
        ? { ...job, applicants: (job.applicants || 0) + 1 }
        : job
    )
    saveJobsToStorage(updatedJobs)

    alert('Application submitted successfully!')
    setFormData({ name: '', email: '', phone: '', resume: null, jobId: '' })
    router.push('/client/job-listings')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Job Application</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="jobId" className="block text-lg font-medium text-gray-700">Select Job Position</label>
          <select
            id="jobId"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            value={formData.jobId}
            onChange={(e) => setFormData({ ...formData, jobId: e.target.value })}
            required
          >
            <option value="">Select a position</option>
            {jobs.map(job => (
              <option key={job.id} value={job.id}>{job.title}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="resume" className="block text-lg font-medium text-gray-700">Upload Resume</label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              className="hidden"
              onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
              accept=".pdf,.doc,.docx"
            />
            <label
              htmlFor="resume"
              className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Upload className="mr-3" size={20} />
              {formData.resume ? formData.resume.name : 'Choose a file'}
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center">
          <Send className="mr-3" size={20} /> Submit Application
        </button>
      </form>
    </div>
  )
}

export default function ApplicationForm() {
  return (
    <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
      <ApplicationFormContent />
    </Suspense>
  )
}

export { ApplicationFormContent };
