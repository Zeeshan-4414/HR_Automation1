'use client'

import { useState } from 'react'
import { Calendar, Clock, Send, Link, Image, Video, X } from 'lucide-react'

export default function SocialMediaScheduler() {
  const [post, setPost] = useState({
    content: '',
    platforms: [] as string[],
    date: '',
    time: '',
    labels: [] as string[],
    media: [] as { type: 'image' | 'video', file: File }[],
    isScheduled: false
  })

  const [linkedAccounts, setLinkedAccounts] = useState({
    linkedin: true,
    facebook: false,
    twitter: true
  })

  const [newLabel, setNewLabel] = useState('')
  const [calendarPosts, setCalendarPosts] = useState<{ [key: string]: string[] }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // If post is scheduled, add to calendar
    if (post.isScheduled) {
      const postDate = `${post.date}`
      setCalendarPosts(prev => ({
        ...prev,
        [postDate]: [...(prev[postDate] || []), post.content]
      }))
    }

    console.log('Scheduled post:', post)
    alert('Post scheduled successfully!')
    setPost({ content: '', platforms: [], date: '', time: '', labels: [], media: [], isScheduled: false })
  }

  const postNow = () => {
    alert('Post sent immediately!')
    console.log('Posted Now:', post)
    setPost({ content: '', platforms: [], date: '', time: '', labels: [], media: [], isScheduled: false })
  }

  const togglePlatform = (platform: string) => {
    setPost(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }))
  }

  const addLabel = () => {
    if (newLabel && !post.labels.includes(newLabel)) {
      setPost(prev => ({ ...prev, labels: [...prev.labels, newLabel] }))
      setNewLabel('')
    }
  }

  const removeLabel = (label: string) => {
    setPost(prev => ({ ...prev, labels: prev.labels.filter(l => l !== label) }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const files = e.target.files
    if (files) {
      const newMedia = Array.from(files).map(file => ({ type, file }))
      setPost(prev => ({ ...prev, media: [...prev.media, ...newMedia] }))
    }
  }

  const removeMedia = (index: number) => {
    setPost(prev => ({ ...prev, media: prev.media.filter((_, i) => i !== index) }))
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-tl from-blue-50 to-indigo-100 rounded-lg shadow-xl">
      <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">Social Media Automation</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scheduled Posts</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner flex items-center justify-center h-48">
            <div className="text-gray-700">
              <h3 className="text-xl">Posts:</h3>
              {Object.keys(calendarPosts).map((date, index) => (
                <div key={index} className="mt-2">
                  <strong>{date}</strong>
                  <ul className="pl-4">
                    {calendarPosts[date].map((content, i) => (
                      <li key={i}>{content}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="content" className="block mb-2 font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Platforms</label>
            <div className="flex space-x-4">
              {['linkedin', 'facebook', 'twitter'].map(platform => (
                <button
                  key={platform}
                  type="button"
                  className={`px-5 py-2 rounded-lg text-sm font-medium ${post.platforms.includes(platform) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-all hover:bg-blue-500`}
                  onClick={() => togglePlatform(platform)}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block mb-2 font-medium text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={post.date}
                onChange={(e) => setPost({ ...post, date: e.target.value, isScheduled: true })}
              />
            </div>

            <div>
              <label htmlFor="time" className="block mb-2 font-medium text-gray-700">Time</label>
              <input
                type="time"
                id="time"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={post.time}
                onChange={(e) => setPost({ ...post, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Hashtags</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.labels.map(label => (
                <span key={label} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
                  {label}
                  <button type="button" onClick={() => removeLabel(label)} className="ml-2 text-red-500 hover:text-red-700">
                    <X size={16} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a label"
              />
              <button
                type="button"
                onClick={addLabel}
                className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Media</label>
            <div className="flex gap-4 mb-4">
              <label htmlFor="image-upload" className="cursor-pointer bg-gray-200 text-gray-700 px-5 py-3 rounded-lg flex items-center hover:bg-gray-300 transition-all">
                <Image className="mr-2" size={20} />
                Upload Images
                <input
                  type="file"
                  id="image-upload"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileUpload(e, 'image')}
                />
              </label>
              <label htmlFor="video-upload" className="cursor-pointer bg-gray-200 text-gray-700 px-5 py-3 rounded-lg flex items-center hover:bg-gray-300 transition-all">
                <Video className="mr-2" size={20} />
                Upload Videos
                <input
                  type="file"
                  id="video-upload"
                  className="hidden"
                  accept="video/*"
                  multiple
                  onChange={(e) => handleFileUpload(e, 'video')}
                />
              </label>
            </div>

            {post.media.length > 0 && (
              <ul className="space-y-2">
                {post.media.map((item, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <span>{item.type === 'image' ? 'Image' : 'Video'}: {item.file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeMedia(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={postNow}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition-all"
            >
              <Send size={18} className="mr-2" />
              Post Now
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition-all"
            >
              <Send size={18} className="mr-2" />
              Schedule Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
