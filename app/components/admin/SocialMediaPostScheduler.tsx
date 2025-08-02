'use client'

import { useState } from 'react'
import { Calendar, Clock, Send } from 'lucide-react'

export default function SocialMediaPostScheduler() {
  const [post, setPost] = useState({
    content: '',
    platform: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Scheduled post:', post)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Social Media Post Scheduler</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold mb-2">Calendar View</h4>
          <div className="bg-white p-4 rounded shadow-inner h-64 flex items-center justify-center">
            <Calendar size={48} className="text-blue-500" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="content" className="block mb-1">Content</label>
            <textarea
              id="content"
              className="w-full p-2 border rounded"
              rows={4}
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="platform" className="block mb-1">Platform</label>
            <select
              id="platform"
              className="w-full p-2 border rounded"
              value={post.platform}
              onChange={(e) => setPost({ ...post, platform: e.target.value })}
              required
            >
              <option value="">Select platform</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="date" className="block mb-1">Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  className="w-full p-2 border rounded pl-8"
                  value={post.date}
                  onChange={(e) => setPost({ ...post, date: e.target.value })}
                  required
                />
                <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="time" className="block mb-1">Time</label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  className="w-full p-2 border rounded pl-8"
                  value={post.time}
                  onChange={(e) => setPost({ ...post, time: e.target.value })}
                  required
                />
                <Clock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center">
            <Send className="mr-2" size={20} /> Schedule Post
          </button>
        </form>
      </div>
    </div>
  )
}
