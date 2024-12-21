'use client'

import { useState, useEffect } from 'react'
import { PlusCircle, Edit2, Trash2, Save, X } from 'lucide-react'

const initialJobs = [
  { id: '1', title: 'Software Developer', description: 'Develop web applications...', qualifications: 'Bachelor\'s degree in Computer Science', skills: 'React, Node.js, TypeScript', applicants: 5 },
  { id: '2', title: 'Marketing Manager', description: 'Lead marketing campaigns...', qualifications: 'MBA in Marketing', skills: 'Digital Marketing, SEO, Content Strategy', applicants: 3 },
  { id: '3', title: 'Data Analyst', description: 'Analyze complex datasets...', qualifications: 'Bachelor\'s degree in Statistics or related field', skills: 'Python, SQL, Data Visualization', applicants: 2 }
]

const getJobsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const jobs = localStorage.getItem('jobs')
    return jobs ? JSON.parse(jobs) : initialJobs
  }
  return initialJobs
}

const saveJobsToStorage = (jobs) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jobs', JSON.stringify(jobs))
  }
}

export default function JobListingsManagement() {
  const [jobs, setJobs] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingJob, setEditingJob] = useState(null)
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    qualifications: '',
    skills: ''
  })

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs')
    if (!storedJobs) {
      localStorage.setItem('jobs', JSON.stringify(initialJobs))
      setJobs(initialJobs)
    } else {
      setJobs(JSON.parse(storedJobs))
    }
  }, [])

  useEffect(() => {
    saveJobsToStorage(jobs)
  }, [jobs])

  const addNewJob = () => {
    setShowForm(true)
    setEditingJob(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingJob) {
      const updatedJobs = jobs.map(job => 
        job.id === editingJob.id ? { ...editingJob, ...newJob } : job
      )
      setJobs(updatedJobs)
      setEditingJob(null)
    } else {
      const job = {
        id: Date.now().toString(),
        ...newJob,
        applicants: 0
      }
      setJobs([...jobs, job])
    }
    setShowForm(false)
    setNewJob({ title: '', description: '', qualifications: '', skills: '' })
    alert(editingJob ? 'Job updated successfully!' : 'New job added successfully!')
  }

  const deleteJob = (id: string) => {
    const updatedJobs = jobs.filter(job => job.id !== id)
    setJobs(updatedJobs)
  }

  const startEditing = (job) => {
    setEditingJob(job)
    setNewJob({
      title: job.title,
      description: job.description,
      qualifications: job.qualifications,
      skills: job.skills
    })
    setShowForm(true)
  }

  const cancelEditing = () => {
    setEditingJob(null)
    setNewJob({ title: '', description: '', qualifications: '', skills: '' })
    setShowForm(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings Management</h1>
      {!showForm && (
        <button onClick={addNewJob} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-4 flex items-center">
          <PlusCircle className="mr-2" size={20} /> Add New Job
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1 font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                id="title"
                value={newJob.title}
                onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={newJob.description}
                onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                className="w-full p-2 border rounded"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="qualifications" className="block mb-1 font-medium text-gray-700">Qualifications</label>
              <input
                type="text"
                id="qualifications"
                value={newJob.qualifications}
                onChange={(e) => setNewJob({...newJob, qualifications: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="skills" className="block mb-1 font-medium text-gray-700">Skills</label>
              <input
                type="text"
                id="skills"
                value={newJob.skills}
                onChange={(e) => setNewJob({...newJob, skills: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button type="button" onClick={cancelEditing} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              {editingJob ? 'Update Job' : 'Add Job'}
            </button>
          </div>
        </form>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Qualifications</th>
              <th className="px-4 py-2 text-left">Skills</th>
              <th className="px-4 py-2 text-left">Applicants</th>
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
                <td className="px-4 py-2">{job.applicants}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => startEditing(job)}>
                    <Edit2 size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => deleteJob(job.id)}>
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

