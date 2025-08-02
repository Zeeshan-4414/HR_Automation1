'use client'

import { useState } from 'react'
import { Send, Upload } from 'lucide-react'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Application Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="resume" className="block mb-1">Upload Resume</label>
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
              className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Upload className="mr-2" size={20} />
              {formData.resume ? formData.resume.name : 'Choose file'}
            </label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center">
          <Send className="mr-2" size={20} /> Submit Application
        </button>
      </form>
    </div>
  )
}
